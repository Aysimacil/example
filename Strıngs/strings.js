// let str1="This is a string"
// let str2="This is a string"
// let str3=`This is a string`
// let str4=new String("This is a string")

// console.log(typeof str1, str1)
// console.log(typeof str2, str2)
// console.log(typeof str3, str3)
// console.log(typeof str4, str4) // ?string Constructor ile oluşturduğumuz için bize obje olarak dönüyor.

// *LENGTH PROPERTY
// let str1="Eypes"
// let str2="Full Stack"
// let str3=""
// let str4=str1+" "+str2

// console.log(str1.length)
// console.log(str2.length)
// console.log(str3.length)
// console.log(str4.length)

// console.log(str1.concat(" ",str2))

// let str1="Hello World"
// console.log(str1)
// let str2=`Hell "o"World`

// console.log(str1[0])
// console.log(str1[1])
// console.log(str1[6])
// console.log(str1[str1.length-1]) // !Son karaktere ulaşmak için uzunluğundan bir eksiğini alarak indexi buluruz.


// ? str1 in tüm elemanlarnı for döngüsü kullanarak yaz
// for(let i=0;i<=str1.length-1; i++){
// console.log(str1[i])
// }

// ?str1 in elemanlarnı tersten for döngüsü ile yaz

// for(let i=str1.length-1;i>=0; i--){
//     console.log(str1[i])
// }

// let a=5;
// let b=a
// console.log(a,b)
// a=10
// console.log(a,b)
// // *ESCAPE SQUENCES
// console.log("Merhaba\tDünya")
// console.log("Merhaba\nDünya")
// console.log(`Merhaba

// Dünya`)
// *STRİNG METHODS
// let str1="Eypes Education"
// console.log(str1.slice(1,7))
// console.log(str1.slice(-8,-2))
// console.log(str1)

// *Substring Method
// console.log(str1.substring(0,5))
// console.log(str1.substring(7,0))
// !Başlangıç değerini büyük girsen de o senin yerine değiştirir. 

// * Concat Method

// let str1="Eypes Education"
// let str2="Full"
// let str3="Stack"
// let result= str1+" "+str2+" "+str3
// console.log(result)
// let result1=str1.concat(" f2 ",str2,"Js Session 8 " ,str3)
// console.log(result1)

// // *Includes Method

// let email="asi@icloud.com"
// console.log(email.includes("@"))

// if(email.includes("@")){
//     console.log("Email is valid")
// }else{
//     console.log("email is invalid")
// }

// // *İNDEXOF METHOD
// console.log(email.indexOf("@"))
// console.log(email.indexOf("#")) // ! eğer yoksa -1 gösterir

// if(email.includes("@") !== -1){
//     console.log("Email is valid")
// }else{
//     console.log("email is invalid")
// }

// // *LastIndexof Method

// console.log(email.lastIndexOf("@"))
// let str5='You do not KNOW what you do not know until you know'
// console.log(str5.lastIndexOf("know"))
// console.log(str5.lastIndexOf("know", 46)) 

// *Search Method

// let str='You do not KNOW what you do not know until you know'
// console.log(str.search('know'))
// console.log(str.search("knowt"))
// console.log(str.search(/know/))
// // !with regular expression
// console.log(str.search(/know/i))
// // ! (i case sensitive'liği ortadan kaldırır.)

// * Replace Method
// let str="Mr Brown has a brown house and a brown car"

// let newStr= str.replace("brown","Huzeyfe")
// console.log(newStr)
// let newStr1=str.replace(/brown/g,"Huzeyfe")
// console.log(newStr1)
// let newStr2=str.replace(/brown/gi,"Huzeyfe")
// console.log(newStr2)
// * Split Method
// let str="welcome to : Full Stack"

// console.log(str.split())
// console.log(str.split(":"))
// console.log(str.split(""))
// console.log(str.split("",10))
// console.log(str.split(" "))
// console.log(str.split(","))//!içinde yoksa tamamnını array yapar
// *Tolower and Upper Cases
// let str="welcome to : Full Stack"

// console.log(str.toLowerCase())
// console.log(str.toUpperCase())

// *Trim Method
// let str="                      Welcome to real world     "

// console.log(str)
// console.log(str.trim())
// console.log(str.trimEnd())
// console.log(str.trimStart())

// * startrswwith Method
// ! Bununla mı başlar sorusunu sorar evetse true döner hayırsa false

let str="eypesedu@Eypes.com is our e-mail adress"

console.log(str.startsWith("eypes"))
console.log(str.startsWith("Eypes".toLowerCase()))
console.log(str.startsWith("Eypes", 9))//! 9. index belirtilen değerle mi başlıyor

// *Endswith Method 
// !Bununla mı biter sorusunu sorar evetse true döner hayırsa false

console.log(str.endsWith("adress"))
console.log(str.endsWith("Eypes",28))