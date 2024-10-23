let num: number = 123
num = +'123'

const numberArray: number[] = [1,23,34,45]
const numberArray2: Array<number> = [1,23,34,45] //Generic type
const numberDiferenr: [string,number] = ['sd',2]
let number2Diferenr: [string,number]
number2Diferenr = ['sd',2]

const numberArrayAny: any[] = [1,'erdf',34,45]


const voidFunction = (): void =>{
	console.log('void')
}
//const enum
//enum
enum Tur  {
Left,
Right = 2,
Stop
}
Tur[0] //Left
console.log(Tur.Stop)







const array: number[]= [1,2,3,4,+'1']

// void - повна відсутність типа
// any - любий тип даних

// enum - 
// never - 