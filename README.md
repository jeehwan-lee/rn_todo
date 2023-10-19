1. INPUT 태그

- keyboardType 에 따라 클릭 시 보여주는 키보드 형태를 설정할 수 있음
- returnKeyType 에 따라 키보드의 DONE 또는 NEXT로 설정할 수 있음
- secureTextEntry 에 따라 비밀번호를 안보이도록 처리
- keyboardAppearance 에 따라 키보드의 색상을 결정

2. Keyboard API : dismiss()를 사용해서 키보드를 사라지게 할 수 있음
   2-1. KeyboardAvoidingView : 키보드가 나올때 화면을 가리지 않도록 화면을 위로 올림

3. onChange / onChangeText 차이는 event를 넘기는지 아니면 Text만 넘기는지

4. createNativeStackNavigator(); 를 통해 화면들을 관리
   4-1. 관리되는 화면들은 Props로 navigation을 받음
   4-2. navigation.navigate 또는 navigation.push 을 통해 화면을 이동할 수 있음
   4-3. push는 화면을 새로 계속 쌓지만 navigate 는 동일한 화면은 그대로 둠
   4-4. 다만, navigate에 데이터를 전달할때 데이터가 바뀌면 화면을 쌓이지 않지만 랜더링은 다시 됨

5. Navigator 에서 첫번째 Screen가 제일 먼저 뜨는 화면이지만,
   initialRouteName으로 첫번째 화면을 정할 수 있음

6. 화면의 옵션을 설정하는법

- Navigator, Screen, 화면 컴포넌트 자체 이렇게 3가지 방법이 있음
- contentStyle, headerTitleAlign(안드로이드에서만 적용), title, headerTitle, headerTintColor, headerTitleStyle, headerShown 등이 있음

7. 뒤로가기

- navigation pop 또는 goBack

8. useNavigation Hook

- navigation props를 전달하지 않고 어디서든 사용할 수 있도록 하는 Hook

9. SafeAreaView : 화면의 윗쪽에 배터리, 시간 등의 표시창과 겹치는 부분을 제외하고 랜더링함
   -> react-native의 SafeAreaView는 ios에서만 적용됨
   -> react-native-safe-area-context 를 사용하면 ios와 android 둘 다 적용됨
