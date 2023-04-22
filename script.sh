# Untuk menampilan parameter-parameter tambahan (Command Line Interface) yg ada di jest
npx jest --help

# Untuk menjalankan testing di sebuah file yg spesifik
npx jest --runTestsByPath test/sum.test.js

# Untuk menjalankan testing untuk sebuah name spesific
# Kode di bawah akan menjalankna test yg nama nya adalah "test sum function 3"
npx jest --testNamePattern "test sum function 3"