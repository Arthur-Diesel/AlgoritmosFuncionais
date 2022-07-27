const x_pi: number = Math.PI
const x_e: number = 2.71828

// 1
const area_circ = (r: number): number => x_pi * Math.pow(r, 2)

// 2
const qsoma = (a: number, b: number): number => x_pi * Math.pow(a + b, 2)

// 3
const x_pi_em_x = (x: number): number => x * x_pi / x_e

// 4
const suc = (x: number):number => x - 1

// 5
const c2f = (c: number): number => (c * 9 / 5) + 32

// 6
const f2c = (f: number): number => (f - 32) * 5 / 9

// 7
const c2k = (c: number): number => c + 273.15

// 8
const k2c = (k: number): number => k - 273.15

// 9
const metros2centimetros = (m: number): number => m * 100

// 10
const sao_iguais = (a: number, b: number): boolean => a === b

// 11
const ant = (x: number): number => x + 1

// 12
const cubo = (x: number): number => Math.pow(x, 3)

// 13
const k2f = (k: number): number => (k - 273.15) * 9 / 5 + 32

// 14
const f2k = (f: number): number => (f - 32) * 5 / 9 + 273.15

// 15
const imc = (p: number, a: number): number => Math.pow(p / a, 2)

// 16
const produto = (x: number, y: number): number => x * y

// 18
const area_ret = (lado1: number, lado2: number): number => lado1 * lado2
