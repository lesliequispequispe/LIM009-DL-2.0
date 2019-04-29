global.window = global;
global.assert = require('chai').assert;
require('../src/data');
const input1 = [{
  "name": "Harry Potter",
  "species": "human",
  "gender": "male",
  "house": "Gryffindor",
  "dateOfBirth": "31-07-1980",
  "yearOfBirth": 1980,
  "hogwartsStudent": true,
  "hogwartsStaff": false
},
{
  "name": "Hermione Granger",
  "species": "human",
  "gender": "female",
  "house": "Gryffindor",
  "dateOfBirth": "19-09-1979",
  "yearOfBirth": 1979,
  "hogwartsStudent": true,
  "hogwartsStaff": false,
}];
const output1 = [{
  "name": "Hermione Granger",
  "species": "human",
  "gender": "female",
  "house": "Gryffindor",
  "dateOfBirth": "19-09-1979",
  "yearOfBirth": 1979,
  "hogwartsStudent": true,
  "hogwartsStaff": false,
}];
const condicion1 = "female";
describe('filtroGenero', () => {
  it('debería ser una función', () => {
    expect(typeof filtroGenero).toBe('function');
  });
  it('debería retornar "output1"', () => {
    expect(filtroGenero(input1, condicion1)).toEqual(output1);
  });
});
const input2 = [{
  "name": "Harry Potter",
  "species": "human",
  "gender": "male",
  "house": "Gryffindor",
  "dateOfBirth": "31-07-1980",
  "yearOfBirth": 1980,
  "hogwartsStudent": true,
  "hogwartsStaff": false
},
{
  "name": "Hermione Granger",
  "species": "human",
  "gender": "female",
  "house": "Gryffindor",
  "dateOfBirth": "19-09-1979",
  "yearOfBirth": 1979,
  "hogwartsStudent": true,
  "hogwartsStaff": false,
},
{
  "name": "Minerva McGonagall",
  "species": "human",
  "gender": "female",
  "house": "Gryffindor",
  "dateOfBirth": "04-10-1925",
  "yearOfBirth": 1925,
  "hogwartsStudent": false,
  "hogwartsStaff": true
}];
const output2 = [{
  "name": "Minerva McGonagall",
  "species": "human",
  "gender": "female",
  "house": "Gryffindor",
  "dateOfBirth": "04-10-1925",
  "yearOfBirth": 1925,
  "hogwartsStudent": false,
  "hogwartsStaff": true
}];
describe('filtroRolStaff', () => {
  it('debería ser una función', () => {
    expect(typeof filtroRolStaff).toBe('function');
  });
  it('debería retornar "output2"', () => {
    expect(filtroRolStaff(input2, true)).toEqual(output2);
  });
});
const input3 = [{
  "name": "Harry Potter",
  "species": "human",
  "gender": "male",
  "house": "Gryffindor",
  "dateOfBirth": "31-07-1980",
  "yearOfBirth": 1980,
  "hogwartsStudent": true,
  "hogwartsStaff": false
},
{
  "name": "Hermione Granger",
  "species": "human",
  "gender": "female",
  "house": "Gryffindor",
  "dateOfBirth": "19-09-1979",
  "yearOfBirth": 1979,
  "hogwartsStudent": true,
  "hogwartsStaff": false,
},
{
  "name": "Minerva McGonagall",
  "species": "human",
  "gender": "female",
  "house": "Gryffindor",
  "dateOfBirth": "04-10-1925",
  "yearOfBirth": 1925,
  "hogwartsStudent": false,
  "hogwartsStaff": true
}];
const output3 = [{
  "name": "Harry Potter",
  "species": "human",
  "gender": "male",
  "house": "Gryffindor",
  "dateOfBirth": "31-07-1980",
  "yearOfBirth": 1980,
  "hogwartsStudent": true,
  "hogwartsStaff": false
},
{
  "name": "Hermione Granger",
  "species": "human",
  "gender": "female",
  "house": "Gryffindor",
  "dateOfBirth": "19-09-1979",
  "yearOfBirth": 1979,
  "hogwartsStudent": true,
  "hogwartsStaff": false,
}];
describe('filtroRolStudents', () => {
  it('debería ser una función', () => {
    expect(typeof filtroRolStudents).toBe('function');
  });
  it('debería retornar "output3"', () => {
    expect(filtroRolStudents(input3, true)).toEqual(output3);
  });
});
const input4 = [{
  "name": "Harry Potter",
  "species": "human",
  "gender": "male",
  "house": "Gryffindor",
  "dateOfBirth": "31-07-1980",
  "yearOfBirth": 1980,
  "hogwartsStudent": true,
  "hogwartsStaff": false
},
{
  "name": "Cedric Diggory",
  "species": "human",
  "gender": "male",
  "house": "Hufflepuff",
  "dateOfBirth": "",
  "yearOfBirth": 1977,
  "hogwartsStudent": true,
  "hogwartsStaff": false,
},
{
  "name": "Cho Chang",
  "species": "human",
  "gender": "female",
  "house": "Ravenclaw",
  "dateOfBirth": "",
  "yearOfBirth": "",
  "hogwartsStudent": true,
  "hogwartsStaff": false,
},
{
  "name": "Minerva McGonagall",
  "species": "human",
  "gender": "female",
  "house": "Gryffindor",
  "dateOfBirth": "04-10-1925",
  "yearOfBirth": 1925,
  "hogwartsStudent": false,
  "hogwartsStaff": true
}];
const output4 = [
  {
    "name": "Cedric Diggory",
    "species": "human",
    "gender": "male",
    "house": "Hufflepuff",
    "dateOfBirth": "",
    "yearOfBirth": 1977,
    "hogwartsStudent": true,
    "hogwartsStaff": false,
  }];
const condicion4 = "Hufflepuff";
describe('filtroCasa', () => {
  it('debería ser una función', () => {
    expect(typeof filtroCasa).toBe('function');
  });
  it('debería retornar "output4"', () => {
    expect(filtroCasa(input4, condicion4)).toEqual(output4);
  });
});
const input5 = [{
  "name": "Harry Potter",
  "species": "human",
  "gender": "male",
  "house": "Gryffindor",
  "dateOfBirth": "31-07-1980",
  "yearOfBirth": 1980,
  "hogwartsStudent": true,
  "hogwartsStaff": false
},
{
  "name": "Hermione Granger",
  "species": "human",
  "gender": "female",
  "house": "Gryffindor",
  "dateOfBirth": "19-09-1979",
  "yearOfBirth": 1979,
  "hogwartsStudent": true,
  "hogwartsStaff": false,
}];
const output5 = [{
  "name": "Hermione Granger",
  "species": "human",
  "gender": "female",
  "house": "Gryffindor",
  "dateOfBirth": "19-09-1979",
  "yearOfBirth": 1979,
  "hogwartsStudent": true,
  "hogwartsStaff": false,
},
{
  "name": "Harry Potter",
  "species": "human",
  "gender": "male",
  "house": "Gryffindor",
  "dateOfBirth": "31-07-1980",
  "yearOfBirth": 1980,
  "hogwartsStudent": true,
  "hogwartsStaff": false
}];
const input6 = [{
  "name": "Hermione Granger",
  "yearOfBirth": 1979,
},
{
  "name": "Harry Potter",
  "yearOfBirth": 1980,
}];
const output6 = [{
  "name": "Harry Potter",
  "yearOfBirth": 1980,
},
{
  "name": "Hermione Granger",
  "yearOfBirth": 1979,
}];
const input7 = [{
  "name": "Harry Potter",
  "yearOfBirth": 1980,
  "hogwartsStudent": true,
  "hogwartsStaff": false
},
{
  "name": "Neville Longbottom",
  "yearOfBirth": 1980,
  "hogwartsStudent": true,
  "hogwartsStaff": false,
}];
const output7 = [
  {
    "name": "Harry Potter",
    "yearOfBirth": 1980,
    "hogwartsStudent": true,
    "hogwartsStaff": false
  },
  {
    "name": "Neville Longbottom",
    "yearOfBirth": 1980,
    "hogwartsStudent": true,
    "hogwartsStaff": false,
  }];
describe('ordenadoAscendente', () => {
  it('debería ser una función', () => {
    expect(typeof ordenadoAscendente).toBe('function');
  });
  it('debería retornar "output5"', () => {
    expect(ordenadoAscendente(input5)).toEqual(output5);
  });
  it('debería retornar "output6"', () => {
    expect(ordenadoAscendente(input6).reverse()).toEqual(output6);
  });
  it('debería retornar "output7"', () => {
    expect(ordenadoAscendente(input7)).toEqual(output7);
  });
});
const input1 = [{
  "name": "Harry Potter",
  "species": "human",
  "gender": "male",
  "house": "Gryffindor",
  "dateOfBirth": "31-07-1980",
  "yearOfBirth": 1980,
  "hogwartsStudent": true,
  "hogwartsStaff": false
},
{
  "name": "Minerva McGonagall",
  "species": "human",
  "gender": "female",
  "house": "Gryffindor",
  "dateOfBirth": "04-10-1925",
  "yearOfBirth": 1925,
  "hogwartsStudent": false,
  "hogwartsStaff": true
}];
const output1 = [{
  "name": "Minerva McGonagall",
  "species": "human",
  "gender": "female",
  "house": "Gryffindor",
  "dateOfBirth": "04-10-1925",
  "yearOfBirth": 1925,
  "hogwartsStudent": false,
  "hogwartsStaff": true
}];
const condicion1 = "female";
describe('filtroGenero', () => {
  it('debería ser una función', () => {
    expect(typeof filtroGenero).toBe('function');
  });
  it('debería retornar "output1"', () => {
    expect(filtroGenero(input1, condicion1)).toEqual(output1);
  });
});
const input2 = [{
  "name": "Harry Potter",
  "species": "human",
  "gender": "male",
  "house": "Gryffindor",
  "dateOfBirth": "31-07-1980",
  "yearOfBirth": 1980,
  "hogwartsStudent": true,
  "hogwartsStaff": false
},
{
  "name": "Hermione Granger",
  "species": "human",
  "gender": "female",
  "house": "Gryffindor",
  "dateOfBirth": "19-09-1979",
  "yearOfBirth": 1979,
  "hogwartsStudent": true,
  "hogwartsStaff": false,
},
{
  "name": "Minerva McGonagall",
  "species": "human",
  "gender": "female",
  "house": "Gryffindor",
  "dateOfBirth": "04-10-1925",
  "yearOfBirth": 1925,
  "hogwartsStudent": false,
  "hogwartsStaff": true
}];
const output2 = [{
  "name": "Minerva McGonagall",
  "species": "human",
  "gender": "female",
  "house": "Gryffindor",
  "dateOfBirth": "04-10-1925",
  "yearOfBirth": 1925,
  "hogwartsStudent": false,
  "hogwartsStaff": true
}];
describe('filtroRolStaff', () => {
  it('debería ser una función', () => {
    expect(typeof filtroRolStaff).toBe('function');
  });
  it('debería retornar "output2"', () => {
    expect(filtroRolStaff(input2, true)).toEqual(output2);
  });
});
const input3 = [{
  "name": "Harry Potter",
  "species": "human",
  "gender": "male",
  "house": "Gryffindor",
  "dateOfBirth": "31-07-1980",
  "yearOfBirth": 1980,
  "hogwartsStudent": true,
  "hogwartsStaff": false
},
{
  "name": "Hermione Granger",
  "species": "human",
  "gender": "female",
  "house": "Gryffindor",
  "dateOfBirth": "19-09-1979",
  "yearOfBirth": 1979,
  "hogwartsStudent": true,
  "hogwartsStaff": false,
},
{
  "name": "Minerva McGonagall",
  "species": "human",
  "gender": "female",
  "house": "Gryffindor",
  "dateOfBirth": "04-10-1925",
  "yearOfBirth": 1925,
  "hogwartsStudent": false,
  "hogwartsStaff": true
}];
const output3 = [{
  "name": "Harry Potter",
  "species": "human",
  "gender": "male",
  "house": "Gryffindor",
  "dateOfBirth": "31-07-1980",
  "yearOfBirth": 1980,
  "hogwartsStudent": true,
  "hogwartsStaff": false
},
{
  "name": "Hermione Granger",
  "species": "human",
  "gender": "female",
  "house": "Gryffindor",
  "dateOfBirth": "19-09-1979",
  "yearOfBirth": 1979,
  "hogwartsStudent": true,
  "hogwartsStaff": false,
}];
describe('filtroRolStudents', () => {
  it('debería ser una función', () => {
    expect(typeof filtroRolStudents).toBe('function');
  });
  it('debería retornar "output3"', () => {
    expect(filtroRolStudents(input3, true)).toEqual(output3);
  });
});
const input4 = [{
  "name": "Harry Potter",
  "species": "human",
  "gender": "male",
  "house": "Gryffindor",
  "dateOfBirth": "31-07-1980",
  "yearOfBirth": 1980,
  "hogwartsStudent": true,
  "hogwartsStaff": false
},
{
  "name": "Cedric Diggory",
  "species": "human",
  "gender": "male",
  "house": "Hufflepuff",
  "dateOfBirth": "",
  "yearOfBirth": 1977,
  "hogwartsStudent": true,
  "hogwartsStaff": false,
},
{
  "name": "Cho Chang",
  "species": "human",
  "gender": "female",
  "house": "Ravenclaw",
  "dateOfBirth": "",
  "yearOfBirth": "",
  "hogwartsStudent": true,
  "hogwartsStaff": false,
},
{
  "name": "Minerva McGonagall",
  "species": "human",
  "gender": "female",
  "house": "Gryffindor",
  "dateOfBirth": "04-10-1925",
  "yearOfBirth": 1925,
  "hogwartsStudent": false,
  "hogwartsStaff": true
}];
const output4 = [
  {
    "name": "Cedric Diggory",
    "species": "human",
    "gender": "male",
    "house": "Hufflepuff",
    "dateOfBirth": "",
    "yearOfBirth": 1977,
    "hogwartsStudent": true,
    "hogwartsStaff": false,
  }];
const condicion4 = "Hufflepuff";
describe('filtroCasa', () => {
  it('debería ser una función', () => {
    expect(typeof filtroCasa).toBe('function');
  });
  it('debería retornar "output4"', () => {
    expect(filtroCasa(input4, condicion4)).toEqual(output4);
  });
});
const input5 = [{
  "name": "Harry Potter",
  "species": "human",
  "gender": "male",
  "house": "Gryffindor",
  "dateOfBirth": "31-07-1980",
  "yearOfBirth": 1980,
  "hogwartsStudent": true,
  "hogwartsStaff": false
},
{
  "name": "Hermione Granger",
  "species": "human",
  "gender": "female",
  "house": "Gryffindor",
  "dateOfBirth": "19-09-1979",
  "yearOfBirth": 1979,
  "hogwartsStudent": true,
  "hogwartsStaff": false,
}];
const output5 = [{
  "name": "Hermione Granger",
  "species": "human",
  "gender": "female",
  "house": "Gryffindor",
  "dateOfBirth": "19-09-1979",
  "yearOfBirth": 1979,
  "hogwartsStudent": true,
  "hogwartsStaff": false,
},
{
  "name": "Harry Potter",
  "species": "human",
  "gender": "male",
  "house": "Gryffindor",
  "dateOfBirth": "31-07-1980",
  "yearOfBirth": 1980,
  "hogwartsStudent": true,
  "hogwartsStaff": false
}];
const input6 = [{
  "name": "Hermione Granger",
  "yearOfBirth": 1979,
},
{
  "name": "Harry Potter",
  "yearOfBirth": 1980,
}];
const output6 = [{
  "name": "Harry Potter",
  "yearOfBirth": 1980,
},
{
  "name": "Hermione Granger",
  "yearOfBirth": 1979,
}];
const input7 = [{
  "name": "Harry Potter",
  "yearOfBirth": 1980,
  "hogwartsStudent": true,
  "hogwartsStaff": false
},
{
  "name": "Neville Longbottom",
  "yearOfBirth": 1980,
  "hogwartsStudent": true,
  "hogwartsStaff": false,
}];
const output7 = [
  {
    "name": "Harry Potter",
    "yearOfBirth": 1980,
    "hogwartsStudent": true,
    "hogwartsStaff": false
  },
  {
    "name": "Neville Longbottom",
    "yearOfBirth": 1980,
    "hogwartsStudent": true,
    "hogwartsStaff": false,
  }];
describe('ordenadoAscendente', () => {
  it('debería ser una función', () => {
    expect(typeof ordenadoAscendente).toBe('function');
  });
  it('debería retornar "output5"', () => {
    expect(ordenadoAscendente(input5)).toEqual(output5);
  });
  it('debería retornar "output6"', () => {
    expect(ordenadoAscendente(input6).reverse()).toEqual(output6);
  });
  it('debería retornar "output7"', () => {
    expect(ordenadoAscendente(input7)).toEqual(output7);
  });
});
