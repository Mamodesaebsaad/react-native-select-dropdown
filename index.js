import React, {useState, useEffect, useRef} from 'react';
import {
  Animated,
  Button,
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
  TouchableWithoutFeedback,
  Dimensions,
  ScrollView,
} from 'react-native';

const Select = ({
  title,
  data,
  value,
  onChangeText,
  search,
  closeButton,
  style,
  searchBoxContainer,
  modalStyle,
  searchTextInputStyle,
  buttonStyle,
  buttonTextStyle,
}) => {
  const [text, setText] = useState();
  const [searchModal, setSearchModal] = useState(search);
  const [searchText, onChangeSearchText] = useState();
  const [filterList, setFilterList] = useState([]);
  const [onOpenModal, setOnOpenModal] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const animatedValue = useRef(new Animated.Value(0)).current;

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 1,
      duration: 1200,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 0,
      duration: 1200,
    }).start();
  };

  useEffect(() => {
    setFilterList(data);
    setSearchModal(search);
  }, [search, data]);

  useEffect(() => {
    setText(value);
    fadeIn();
  }, [value]);

  console.log(text);

  const onSelectItem = value => {
    setText(value);
    fadeIn();
    onChangeSearchText();
    setFilterList(data);
    setOnOpenModal(false);
  };

  const onSearch = value => {
    if (value) {
      const newData = data.filter(item => {
        const itemData = item.toUpperCase();
        const textData = value.toUpperCase();

        return itemData.indexOf(textData) > -1;
      });

      setFilterList(newData);
      onChangeSearchText(value);
    } else {
      setFilterList(data);
      onChangeSearchText(value);
    }
  };

  return (
    <View style={style}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          setOnOpenModal(true);
        }}>
        <View
          style={{
            flexDirection: 'column',
            paddingLeft: 25,
            padding: 5,
          }}>
          <View style={{}}>
            <Text style={{color: '#505050', fontSize: text ? 12 : 15}}>
              {title}
            </Text>
          </View>

          <Animated.View style={[styles.leftContainer, {opacity: fadeAnim}]}>
            {text && <Text style={{color: 'black'}}>{text}</Text>}
          </Animated.View>
        </View>

        {text && (
          <TouchableOpacity
            onPress={() => {
              fadeOut();
              setText();
            }}>
            <View
              style={{
                width: 50,
                height: '100%',
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
                borderWidth: 1,
                borderColor: '#F88379',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F88379',
              }}>
              <Text style={{color: 'white', fontSize: 15}}>X</Text>
            </View>
          </TouchableOpacity>
        )}
      </TouchableOpacity>

      {onOpenModal && (
        <Modal
          animationType="fade"
          transparent={true}
          visible={onOpenModal}
          onRequestClose={() => {
            setOnOpenModal(false);
          }}>
          <TouchableWithoutFeedback
            onPress={() => {
              setOnOpenModal(false);
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-end',
                backgroundColor: 'rgba(0,0,0,0.3)',
              }}>
              <View
                style={[
                  {
                    width: windowWidth,
                    height:
                      search && closeButton
                        ? windowHeight / 1.8
                        : closeButton
                        ? windowHeight / 2.3
                        : search
                        ? windowHeight / 2.1
                        : windowHeight / 2.8,
                    alignItems: 'center',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    backgroundColor: 'white',
                    padding: 5,
                    marginBottom: 0,
                  },
                  modalStyle,
                ]}>
                {/* Search box */}
                {searchModal && (
                  <View
                    style={[
                      {
                        width: windowWidth - 20,
                        borderWidth: 1,
                        borderRadius: 8,
                        borderColor: '#999999',
                        backgroundColor: 'white',
                        padding: 5,
                        marginTop: 10,
                      },
                      searchBoxContainer,
                    ]}>
                    <Text style={{color: 'black'}}>Search</Text>
                    <TextInput
                      style={[
                        {
                          backgroundColor: '#F5F5F5',
                          borderRadius: 8,
                          color: 'black',
                        },
                        searchTextInputStyle,
                      ]}
                      onChangeText={text => onSearch(text)}
                      value={searchText}
                    />
                  </View>
                )}
                {/* display list */}
                <View
                  style={{
                    marginTop: 10,
                    backgroundColor: '#F5F5F5',
                    borderRadius: 8,
                    padding: 10,
                    width: windowWidth - 20,
                    height: windowHeight / 3,
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                  }}>
                  <ScrollView
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{}}>
                    {filterList?.length > 0 &&
                      filterList?.map((item, index) => (
                        <TouchableOpacity
                          style={{
                            width: '100%',
                            padding: 5,
                            borderBottomWidth: 1,
                            borderBottomColor:
                              index !== filterList.length - 1
                                ? 'white'
                                : 'transparent',
                          }}
                          key={item}
                          onPress={() => {
                            onSelectItem(item);
                          }}>
                          <Text style={{color: 'black', textAlign: 'center'}}>
                            {item}
                          </Text>
                        </TouchableOpacity>
                      ))}
                  </ScrollView>
                </View>

                {/* Button Close */}
                {closeButton && (
                  <Pressable
                    style={[
                      {
                        marginTop: 10,
                        width: windowWidth - 20,
                        borderWidth: 1,
                        padding: 8,
                        borderRadius: 8,
                        backgroundColor: 'white',
                      },
                      buttonStyle,
                    ]}
                    onPress={() => {
                      setOnOpenModal(false);
                    }}>
                    <Text
                      style={[
                        {textAlign: 'center', color: 'black', fontSize: 15},
                        buttonTextStyle,
                      ]}>
                      Close
                    </Text>
                  </Pressable>
                )}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderRadius: 8,
    // paddingRight: 25,
    borderColor: '#F5F5F5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 42,
    backgroundColor: 'white',
  },
  leftContainer: {
    // backgroundColor: 'red',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default Select;
