const Utilitarios = require('../src/utilitarios')

describe('teste', () => {
    let utilitarios;

    beforeEach(() => {
        utilitarios = new Utilitarios()
    })

    test('Metodo que inverte string', () => {
        const invertedString = utilitarios.inverterString('teste')

        expect(invertedString).toBe('etset')
    })

    test('Metodo que conta caracter', () => {
        const charLength = utilitarios.contarCaracteres('teste')

        expect(charLength).toBe(5)
    })

    test('Metodo que passa caracter para maiuscula', () => {
        const upperCase = utilitarios.paraMaiusculas('teste')

        expect(upperCase).toBe('TESTE')
    })

    test('Metodo que passa caracter para minusculo', () => {
        const upperCase = utilitarios.paraMinusculas('TESTE')

        expect(upperCase).toBe('teste')
    })

    test('Metodo que passa apenas a primeira letra para maiuscula', () => {
        const upperCase = utilitarios.primeiraLetraMaiuscula('teste')

        expect(upperCase).toBe('Teste')
    })

    test('Metodo soma dois numeros', () => {
        const result = utilitarios.somar(2, 2)

        expect(result).toBe(4)
    })

    test('Metodo subtrai dois numeros', () => {
        const result = utilitarios.subtrair(2, 2)

        expect(result).toBe(0)
    })

    test('Metodo multiplica dois numeros', () => {
        const result = utilitarios.multiplicar(2, 2)

        expect(result).toBe(4)
    })

    test('Metodo divide dois numeros', () => {
        const result = utilitarios.dividir(4, 2)

        expect(result).toBe(2)
    })

    test('Metodo que verifica se o numero é par', () => {
        const result = utilitarios.ehPar(4)

        expect(result).toBe(true)
    })

    test('Metodo que retorna primeiro elemento', () => {
        const firstElement = utilitarios.primeiroElemento([4, 5, 6, 7])

        expect(firstElement).toBe(4)
    })

    test('Metodo que retorna ultimo elemento', () => {
        const lastElement = utilitarios.ultimoElemento([4, 5, 6, 7])

        expect(lastElement).toBe(7)
    })

    test('Metodo que retorna o tamanho do array', () => {
        const arrayLength = utilitarios.tamanhoArray([4, 5, 6, 7])

        expect(arrayLength).toBe(4)
    })

    test('Metodo que verifica se o arg é numero', () => {
        const isNumber = utilitarios.ehNumero(4)

        expect(isNumber).toBe(true)
    })

    test('Metodo que remove espaços', () => {
        const cleanedString = utilitarios.removerEspacos(' teste  ')

        expect(cleanedString).toBe('teste')
    })

    test('Metodo que repete palavras', () => {
        const repeatedString = utilitarios.repetirTexto('teste', 3)

        expect(repeatedString).toBe('testetesteteste')
    })

    test('Metodo que retorna a media do array', () => {
        const media = utilitarios.mediaArray([2, 3, 4])

        expect(media).toBe(3)
    })
    
    test('Metodo que ordena o array', () => {
        const sortedArray = utilitarios.ordenarArray([5, 4, 7, 6])

        expect(sortedArray).toEqual([4, 5, 6, 7])
    })

    test('Metodo que remove itens duplicos do array', () => {
        const noDuplicates = utilitarios.removerDuplicados([5, 5, 6, 7, 5])

        expect(noDuplicates).toEqual([5, 6, 7])
    })
    
    test('Metodo que conta palavras', () => {
        const numberWord = utilitarios.contarPalavras('teste teste')

        expect(numberWord).toBe(2)
    })

    test('Metodo que inverte array', () => {
        const invertedArray = utilitarios.inverterArray([1, 2, 3])

        expect(invertedArray).toEqual([3, 2, 1])
    })

    test('Metodo que mescla objeto', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { b: 99, c: 3 };

        expect(utilitarios.mesclarObjetos(obj1, obj2)).toEqual({ a: 1, b: 99, c: 3 });
    })

    
    test('Metodo que verifica se é palindromo', () => {
        expect(utilitarios.ehPalindromo('banana')).toBe(false);
    })
    

    test('Metodo que junta array', () => {
        const arrayMesclado = utilitarios.juntarArray([3, 4, 5, 6], ';')

        expect(arrayMesclado).toBe('3;4;5;6')
    })
})