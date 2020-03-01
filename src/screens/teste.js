<Container>
    <Animated.ScrollView
        ref={ref => this._scrollView = ref}
        scrollEventThrottle={5}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event([{
            nativeEvent: {
                contentOffset:
                    { y: this.nScroll }
            }
        }], { useNativeDriver: true })}
        style={{ zIndex: 0 }}
        contentContainerStyle={{
            paddingTop: this.state.tabIndex >
                0 ? HEADER_HEIGHT : IMAGE_HEIGHT
        }}>
        <Tabs
            // prerenderingSiblingsNumber={0}
            onChangeTab={({ i }) => {
                this.setState({
                    contextMenu: {
                        modalVisible: false,
                        callContext: false
                    }
                });
                // set header height for reading details
                this.animationByClick(i);
                // scroll each tab to top
                this._scrollView.getNode().scrollTo({
                    y: 0,
                    animated: true,
                });
            }}
            tabBarUnderlineStyle={{
                backgroundColor:
                    StylingVariables.Colors.main_blue
            }}
            renderTabBar={(props) => <Animated.View
                style={{
                    transform: [{ translateY: this.tabY }],
                    zIndex: 1,
                    width: '100%',
                    backgroundColor: 'white',
                    marginBottom: 22,
                }}>
                <ScrollableTab {...props}

                    tabsContainerStyle={styles.styleTabsContainer}
                    renderTab={(name, page, active,
                        onPress, onLayout) => (
                            <TouchableOpacity key={page}
                                onPress={()
                                    => onPress(page)}

                                onLayout={onLayout}

                                activeOpacity={0.4}>
                                <Animated.View
                                    style={{
                                        flex: 1, height: 100, backgroundColor:
                                            StylingVariables.Colors.white
                                    }}>
                                    <TabHeading scrollable

                                        style={{
                                            backgroundColor: 'transparent', paddingLeft: 40,
                                            paddingRight: 40, paddingTop: 15,
                                        }}

                                        active={active}>
                                        <Animated.Text
                                            style={{
                                                fontFamily:
                                                    StylingVariables.Fonts.Text.Regular,
                                                color: active ?
                                                    StylingVariables.Colors.main_blue :
                                                    StylingVariables.Colors.anthrazite,
                                                fontSize: 16,
                                            }}>
                                            {name}
                                        </Animated.Text>
                                    </TabHeading>
                                </Animated.View>
                            </TouchableOpacity>
                        )} />
                <LinearGradient style={styles.shadow}
                    colors={['rgba(0,0,0,0.07)', 'transparent']} />
            </Animated.View>
            }
        >
            <Tab heading={'Tab1'}>
                <Content>
                    <ShortTab />
                </Content>
            </Tab>
            <Tab heading={'Tab2'}>
                <Content>
                    <MiddleTab />
                </Content>
            </Tab>
            <Tab heading={'Tab3'}>
                <Content>
                    <LongTab />
                </Content>
            </Tab>
        </Tabs>
    </Animated.ScrollView>
</Container> 