import { 
    Pipe, 
    PipeTransform 
   } from '@angular/core'; 
   
   @Pipe ({ 
    name: 'camelCase' 
   }) 
   
   export class CamelCase implements PipeTransform {
    transform (value: string): string { 
        // =====создание перем
        let firstLetter =  value.split('')//===========value преврашаем в массив []
        for (let i=1; i < firstLetter.length; i++){//=======проходим по циклу
          if (firstLetter[i]!==' '){      //==========проверка на не равен п.с
             if (i % 2 === 0){      //=========проверка на остаток 0
                firstLetter[i] = firstLetter[i].toUpperCase() //========= верхние регистр 
            }
            else  
            {
                firstLetter[i] = firstLetter[i].toLowerCase() 
            }
        }
        value = firstLetter.join(' ')//==============обьединение масива 
      } 
    
        return value
    }}
