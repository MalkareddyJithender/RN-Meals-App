### important points to remember

- while applying shadow on iOS devices, in order to work add backgroundColor property along with those
  shadow specific properties.
- we use react-navigation library for navigation in react native apps.
- @react-navigation/native core package we need to install
- wrap <NavigationContainer> around our entire app i.e, in app.js file & defined only ance in app.
- we need to use one of the supported navigators i.e, stack,native-stack or drawer etc to implement different navigation patterns.
- stack based navigation means second screen is pushed on top of first screen and so on...
- eg: releasing tennise balls on it's own cover.
- By default <Stack.Navigator>'s first child will be displayed as a default screen
- we can also pass initialRouteName="nameofscreen" to render as default screen.
- <Stack.Navigator initialRouteName="name">
- we can register our screens through <Stack.Screen> component in our stack navigator.
- components which are registered on Stack.Screen component will get special props like route,navigation from
  react-navigation package.
- navigaton has method like navigation.navigate("nameOfScreen",{params object})
- route has params property which we can access params provided while navigating. (route.params)
- components which are not screen components also gets special props (route,navigation) by the following hooks
- useRoute & useNavigation hooks

- we can also customize header,header bg color, header text & color, content & it's background color.
- Each screen has it's own options. we pass options prop i.e,
  options={{
      title:'example'
  }}
- these are not reflected in another screen.
- we can also pass "screenOptions" special prop to Stack.Navigator component and these options are applied to all of the screeens registered.
- if we define screenOptions and options prop on screens,then options props related to individual screens can
  override screenOptions.

# dynamic options

- we can also set options prop dynamically.
  1st way : options={({route,navigation}) => return object}
- here we pass our function and it gets called with object with navigation,route properties by react-navigation (app.js)
- conditionally we can return options object.
- 2nd way: we can use navigation.setOptions({}) method from the inside of our component functions also.
- it will also sets options for our specific screen.

- useLayoutEffect is similar to useEffect but it will be executed before component rendering completed.
- it will be executed along the flow (synchrously)
- navigation object method has three properties : navigate(''), setOptions({}) and toggleDrawer() which
  toggles side drawer.
- we usually use headerStyle,contentStyle options for all navigators for applying header and content backgrounds except drawer navigator.
- for drawer navigator, we use headerStyle and sceneContainerStyle options.

  # drawer navigator example

        <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="AllMeals"
          screenOptions={{
            headerStyle: {
              backgroundColor: "indigo",
            },
            headerTintColor: "#fff",
            drawerActiveTintColor: "orange",
            drawerActiveBackgroundColor: "#eee",
            drawerStyle: {
              backgroundColor: "#c6cbef",
              width: 240,
            },
          }}
        >
          <Drawer.Screen
            name="Welcome"
            component={Test}
            options={{
              title: "Welcome Screen",
              drawerLabel: "Welcome",
              drawerIcon: ({ color, size }) => {
                return <IconButton name="person" color={color} size={size} />;
              },
            }}
          />
          <Drawer.Screen
            name="AllMeals"
            component={Test}
            options={{
              title: "All Meals",
              drawerLabel: "All Mealss",
              drawerIcon: ({ color, size }) => {
                return <IconButton name="home" size={size} color={color} />;
              },
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>

# bottom tabs navigation example

<NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            tabBarShowLabel: true,
            headerStyle: {
              backgroundColor: "#4d0000",
            },
            headerTintColor: "#fff",
            tabBarActiveTintColor: "#4d0000",
            sceneContainerStyle:{
             backgroundColor:'orange'
            },
          }}
        >
          <BottomTab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <BottomTab.Screen
            name="User"
            component={User}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" color={color} size={size} />
              ),
            }}
          />
          <BottomTab.Screen
            name="Help"
            component={Help}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="help" size={size} color={color} />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>


# _______ redux toolkit _______ 

- redux is a javascript library for managing application state.

- it is most commonly used with react, but it can also be used with any other js frameworks like 
angular.js and viewjs.

- problems with redux :
 * configuring a redux store is too complicated
 * I have to add a lot of packages to get redux set up.
 * redux requires too much boilerplate code.

- To avoid these problems, we need to use redux toolkit.

- redux toolkit is a set of tools that helps us to simplify the redux development.
- it includes the utilities for creating and managing redux store, also includes utilities
  for creating actions and reducers.
- redux team recommends us that "whenever we use redux - use redux toolkit".
- with the help of redux toolkit, we can write simplified & better redux code.
- redux toolkit will be available as a npm package i.e, @reduxjs/toolkit

- configureStore : it will create redux store, combines slice reducers, adds redux-thunk middleware by default and automatically enables redux dev tools extension. (simplify configuration).

- createSlice : it accepts an object as an argument.
* name - name of the slice (piece)
* initialState - this is the initial state loaded by default
* reducers - we need to pass our reducer functions here. Those will accept (state,action) as parameters
  and those will be called automatically whenever we dispatch a specific action.
* This function will return a slice object with properties name,getInitialState,caseReducers,reducer,actions etc.
* action generators will be created for our case reducers with the same name as reducers.
* we can export these action creators and call them to generate a specific action.
* these will create object with below format : 
{
  type:'name_of_slice/reducer_function_name',
  payload:undefined
};
* we can call action creators with any value, this value will be set as a value for payload property
  in the generated object.

* we can dispatch the specific action with the help of useDispatch hook. (useDispatch()(action)).

* when we dispatch a specific action to redux store, case reducer function gets called and new state
  should be returned.

* useSelector : It is a react hook, it calls cb function with the state after fetching. whatever cb func
  returns that value will be stored into a variable. In this way, we can read redux's store state.

* "react-redux" package will be responsible for providing state to entire app, reading store data into react app and dispatching an action to redux store. 


