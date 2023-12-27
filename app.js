//1)რა განსხვავება პრიმიტიულ და არაპრიმიტიულ მონაცემთა ტიპებში?
//answer: 

//პრიმიტიულია ტიპები,რომლებასც აქვთ მხოლოდ ერთი მნიშვნელობა მაგალითად let number = 10 ააქვს მხოლოდ ერთი მნიშვნელობა
//არაპრიმიტიულ ტიპებს, შეიძლება ქონდეს ბევრი მნიშვნელობა  მაგალითად let numbers = [1,2,3,4,5,6,,7,8,9,10] es aris masivebi
// let user = { number=10 , age=12, name=boni}

//2)რა განსხვავება ცვლადებს const და let შორის და დაწერეთ პატარა მაგალითიც!!
//answer:


// let-შეგვიძლია სხვა მნიშვნელობა მივანჭოთ
//მაგალითად, თუ ვიტყვით, რომ 
let number = 10
console.log(number) // itkvis ,rom aris 10
//aq ki tu gadavawert mnishvnelobas da vitkvit rom 
number=15
console.log(number) //gadaewereba da number ikneba mnishvnelobit 15
// კონსტანტათი კი მნიშვნელობა არის მხოლოდ ერთი და ვერ გადავაწერთ მუდმივია
 const numbers = 15
 console.log(numbers)  // ver gadavawert tu gadavawert mnishvnelobas da vitkvit , rom numbers=20 s ar imushavebs da iqneba shecdoma


//3)დაწერეთ კოდი, სადაც აღწერთ თითოეული პრიმიტიული
//მონაცემთა ტიპის ცვლადს სხვადასხვა მნიშვნელობებით და 
// შეუცვალეთ რამდენიმეს შემდგომ მნიშვნელობები ანუ 
//გადააწერეთ ახალი მნიშვნელობა და დალოგეთ შემდეგ ეს ცვლადები.
let name = 'lika'
let age = 22
let address = 'tbilissi'
console.log(name)
name= 'natali'

//4)აღწერეთ არაპრიმიტიული მონაცემთა ტიპები მაგალითად array
// და array-ში რომ გქონდეთ object და თქვენ შესახებ ინფორმაცია აღწერეთ ამ
// object-ში;მაგალითად let user = [{name: 'nika'}] და ასე
//შემდეგ ყველა ინფორმაციით შეავსეთ თქვენ შესახებ რომელიც შეიცავს
//(firstName,lastName,age,email,address,isStudent) და დალოგეთ

//არაი არის მასივი- მასიური მონაცემთა ტიპი,რომელშიც შეგვიძლია შევიყვანოთ ათასობით მმონაცემი
let myinfo = [ { name:'lika', age:23, email: 'l.sharmanashvili@gmail.com', }]
console.log(myinfo)
