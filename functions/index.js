const functions = require('firebase-functions');
const cors = require('cors')({ origin: true})
const fs = require('fs')
const uuid = require('uuid-v4')
const { Storage } = require('@google-cloud/storage')
const storage = new Storage({
    projectId: 'helpfy-18cd6',
    keyFilename: 'helpfy-18cd6.json'
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.uploadImage = functions.https.onRequest((request, response) => {
    cors(request, response, () => {        
        try {
            console.log('teste')
            // escrever o arquivo imagem no disco local
            fs.writeFileSync('/tmp/imageToSave.jpg', 
                request.body.image, 'base64')            
            
            // local onde sera armazendo os arquivos - no firebase storage
            const bucket = storage.bucket('helpfy-18cd6.appspot.com')
            const id = uuid()            
            bucket.upload('/tmp/imageToSave.jpg', {            
                // upload da imagem
                uploadType: 'media',
                // id gerado do uuid
                destination: `/posts/${id}.jpg`,                
                metadata: {
                    metadata: {
                        contentType: 'image/jpeg',
                        firebaseStorageDownloadTokens: id
                    }                    
                },
                // caso de erro                
            }, (err, file) => {
                // caso de erro
                if (err) {        
                    console.log(err)            
                    return response.status(500).json({ error: err })
                // gerar url da imagem para conseguir buscar depois no firebase
                } else {
                    const filename = encodeURIComponent(file.name)
                    const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/'
                        + bucket.name + '/o/' + filename + '?alt=media&token=' + id
                    return response.status(201).json({ imageUrl: imageUrl })
                }
            })
        // caso nao consiga escrever o arquivo em disco
        } catch(err) {
            // console pode ser visualizado no firebase
            console.log(err)
            return response.status(500).json({ error: err })
        }        
    })
});
