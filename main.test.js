const calculo = require('./main')

describe('funções matematicas',()=>{
    test('Soma de dois numeros', ()=>{
        expect(calculo.soma(25,30)).toBe(55)
    })
    test('Subtrção de dois numeros', ()=>{
        expect(calculo.subtracao(20,5)).toEqual(15)
    })
    test('Multiplicação de dois numeros', ()=>{
        expect(calculo.multi(5,5)).toBe(25)
    })
    test('Divião de dois numeros', ()=>{
        expect(calculo.div(25,5)).toBeCloseTo(5)
    })
})