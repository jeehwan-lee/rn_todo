1. INPUT 태그

- keyboardType 에 따라 클릭 시 보여주는 키보드 형태를 설정할 수 있음
- returnKeyType 에 따라 키보드의 DONE 또는 NEXT로 설정할 수 있음
- secureTextEntry 에 따라 비밀번호를 안보이도록 처리
- keyboardAppearance 에 따라 키보드의 색상을 결정

2. Keyboard API : dismiss()를 사용해서 키보드를 사라지게 할 수 있음

3. onChange / onChangeText 차이는 event를 넘기는지 아니면 Text만 넘기는지

4. createNativeStackNavigator(); 를 통해 화면들을 관리
   4-1. 관리되는 화면들은 Props로 navigation을 받음
   4-2. navigation.navigate 또는 navigation.push 을 통해 화면을 이동할 수 있음
   4-3. push는 화면을 새로 계속 쌓지만 navigate 는 동일한 화면은 그대로 둠
   4-4. 다만, navigate에 데이터를 전달할때 데이터가 바뀌면 화면을 쌓이지 않지만 랜더링은 다시 됨

5. Navigator 에서 첫번째 Screen가 제일 먼저 뜨는 화면이지만,
   initialRouteName으로 첫번째 화면을 정할 수 있음
