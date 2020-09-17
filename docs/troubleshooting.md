## Debug
Reproduce production environment 
- `expo start --no-dev --minify`

If anyone else runs into this issue after upgrading the Expo SDK
- run `expo r -c` to clear the expo cache as well as `npm cache clean -f`

Invariant Violation: Tried to register two views with the same name RNCSafeAreaProvider
- https://github.com/th3rdwave/react-native-safe-area-context/issues/110#issuecomment-668864576