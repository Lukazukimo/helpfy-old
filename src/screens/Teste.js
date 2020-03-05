import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation'
import ProfileInformation from './ProfileInformation'
import ProfilePosts from './ProfilePosts'
import ProfileComment from './ProfileComment'

const Teste = createMaterialTopTabNavigator(
    {
        a: ProfileInformation,
        b: ProfilePosts,
        c: ProfileComment
    }
)

export default Teste