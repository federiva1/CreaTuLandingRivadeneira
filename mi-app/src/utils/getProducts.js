import camisetaManUHome from '../assets/camisetaManUHome.png';
import ManchesterSuplente from '../assets/ManchesterSuplente.png';
import ManchesterTercera from '../assets/ManchesterTercera.png';
import ChelseaTitular from '../assets/ChelseaTitular.png';
import ChelseaSup from '../assets/ChelseaSup.png';
import ChelseaAlter from '../assets/ChelseaAlter.png';
import SpursTitular from '../assets/SpursTitular.png';
import SpursSup from '../assets/SpursSup.png';
import SpursAlter from '../assets/SpursAlter.png';
import CityTitular from '../assets/CityTitular.png';
import CitySup from '../assets/CitySup.png';
import CityAlter from '../assets/CityAlter.png';
import ArsenalTitular from '../assets/ArsenalTitular.png';
import ArsenalSup from '../assets/ArsenalSup.png';
import ArsenalAlter from '../assets/ArsenalAlter.png';
import LiverpoolTitular from '../assets/LiverpoolTitular.png';
import LiverpoolSup from '../assets/LiverpoolSup.png';
import LiverpoolAlter from '../assets/LiverpoolAlter.png';
import EstadioCity from '../assets/EstadioCity.png';
import EstadioLiverpool from '../assets/EstadioLiverpool.png';
import EstadioTottenham from '../assets/EstadioTottenham.png';
import EstadioArsenal from '../assets/EstadioArsenal.png';
import EstadioManUnited from '../assets/EstadioManUnited.png';
import EstadioChelsea from '../assets/EstadioChelsea.png';



const products = [
    // Manchester United
    {
        id: 1,
        title: 'Camiseta Titular Manchester United',
        description: 'Camiseta oficial titular temporada 2024/2025',
        price: 25000,
        pictureUrl: camisetaManUHome,
        category: 'camisetas',
    },
    {
        id: 2,
        title: 'Camiseta Suplente Manchester United',
        description: 'Camiseta suplente temporada 2024/2025',
        price: 20000,
        pictureUrl: ManchesterSuplente,
        category: 'camisetas',
    },
    {
        id: 3,
        title: 'Camiseta Alternativa Manchester United',
        description: 'Tercera equipación oficial temporada 2024/2025',
        price: 18000,
        pictureUrl: ManchesterTercera,
        category: 'camisetas',
    },
    // Chelsea
    {
        id: 4,
        title: 'Camiseta Titular Chelsea',
        description: 'Camiseta oficial titular temporada 2024/2025',
        price: 25000,
        pictureUrl: ChelseaTitular,
        category: 'camisetas',
    },
    {
        id: 5,
        title: 'Camiseta Suplente Chelsea',
        description: 'Camiseta suplente temporada 2024/2025',
        price: 20000,
        pictureUrl: ChelseaSup,
        category: 'camisetas',
    },
    {
        id: 6,
        title: 'Camiseta Alternativa Chelsea',
        description: 'Tercera equipación oficial temporada 2024/2025',
        price: 18000,
        pictureUrl: ChelseaAlter,
        category: 'camisetas',
    },
    // Manchester City
    {
        id: 7,
        title: 'Camiseta Titular Manchester City',
        description: 'Camiseta oficial titular temporada 2024/2025',
        price: 25000,
        pictureUrl: CityTitular,
        category: 'camisetas',
    },
    {
        id: 8,
        title: 'Camiseta Suplente Manchester City',
        description: 'Camiseta suplente temporada 2024/2025',
        price: 20000,
        pictureUrl: CitySup,
        category: 'camisetas',
    },
    {
        id: 9,
        title: 'Camiseta Alternativa Manchester City',
        description: 'Tercera equipación oficial temporada 2024/2025',
        price: 18000,
        pictureUrl: CityAlter,
        category: 'camisetas',
    },
    // Tottenham
    {
        id: 10,
        title: 'Camiseta Titular Tottenham',
        description: 'Camiseta oficial titular temporada 2024/2025',
        price: 25000,
        pictureUrl: SpursTitular,
        category: 'camisetas',
    },
    {
        id: 11,
        title: 'Camiseta Suplente Tottenham',
        description: 'Camiseta suplente temporada 2024/2025',
        price: 20000,
        pictureUrl: SpursSup,
        category: 'camisetas',
    },
    {
        id: 12,
        title: 'Camiseta Alternativa Tottenham',
        description: 'Tercera equipación oficial temporada 2024/2025',
        price: 18000,
        pictureUrl: SpursAlter,
        category: 'camisetas',
    },
    // Arsenal
    {
        id: 13,
        title: 'Camiseta Titular Arsenal',
        description: 'Camiseta oficial titular temporada 2024/2025',
        price: 25000,
        pictureUrl: ArsenalTitular,
        category: 'camisetas',
    },
    {
        id: 14,
        title: 'Camiseta Suplente Arsenal',
        description: 'Camiseta suplente temporada 2024/2025',
        price: 20000,
        pictureUrl: ArsenalSup,
        category: 'camisetas',
    },
    {
        id: 15,
        title: 'Camiseta Alternativa Arsenal',
        description: 'Tercera equipación oficial temporada 2024/2025',
        price: 18000,
        pictureUrl: ArsenalAlter,
        category: 'camisetas',
    },
    // Liverpool
    {
        id: 16,
        title: 'Camiseta Titular Liverpool',
        description: 'Camiseta oficial titular temporada 2024/2025',
        price: 25000,
        pictureUrl: LiverpoolTitular,
        category: 'camisetas',
    },
    {
        id: 17,
        title: 'Camiseta Suplente Liverpool',
        description: 'Camiseta suplente temporada 2024/2025',
        price: 20000,
        pictureUrl: LiverpoolSup,
        category: 'camisetas',
    },
    {
        id: 18,
        title: 'Camiseta Alternativa Liverpool',
        description: 'Tercera equipación oficial temporada 2024/2025',
        price: 18000,
        pictureUrl: LiverpoolAlter,
        category: 'camisetas',
    },

    // Entradas 
        {
        id: 19,
        title: 'Entrada: Manchester United vs Liverpool',
        description: 'Partido en Old Trafford - Fecha 3 Premier League',
        price: 18000,
        pictureUrl: EstadioManUnited,
        category: 'entradas',
    },
    {
        id: 20,
        title: 'Entrada: Chelsea vs Arsenal',
        description: 'Partido en Stamford Bridge - Fecha 5 Premier League',
        price: 17000,
        pictureUrl: EstadioChelsea,
        category: 'entradas',
    },
    {
        id: 21,
        title: 'Entrada: Manchester City vs Tottenham',
        description: 'Partido en Etihad Stadium - Fecha 6 Premier League',
        price: 16500,
        pictureUrl: EstadioCity,
        category: 'entradas',
    },
    {
        id: 22,
        title: 'Entrada: Manchester United vs Chelsea',
        description: 'Partido en Old Trafford - Fecha 7 Premier League',
        price: 17000,
        pictureUrl: EstadioManUnited,
        category: 'entradas',
    },
    {
        id: 23,
        title: 'Entrada: Manchester United vs Manchester City',
        description: 'Derby de Mánchester en Old Trafford - Fecha 10 Premier League',
        price: 19000,
        pictureUrl: EstadioManUnited,
        category: 'entradas',
    },
    {
        id: 24,
        title: 'Entrada: Manchester United vs Arsenal',
        description: 'Partido en Old Trafford - Fecha 12 Premier League',
        price: 17500,
        pictureUrl: EstadioManUnited,
        category: 'entradas',
    },
    {
        id: 25,
        title: 'Entrada: Manchester United vs Tottenham',
        description: 'Partido en Old Trafford - Fecha 14 Premier League',
        price: 16500,
        pictureUrl: EstadioManUnited,
        category: 'entradas',
    },
    {
        id: 26,
        title: 'Entrada: Liverpool vs Chelsea',
        description: 'Partido en Anfield - Fecha 4 Premier League',
        price: 17000,
        pictureUrl: EstadioLiverpool,
        category: 'entradas',
    },
    {
        id: 27,
        title: 'Entrada: Liverpool vs Manchester City',
        description: 'Partido en Anfield - Fecha 8 Premier League',
        price: 18500,
        pictureUrl: EstadioLiverpool,
        category: 'entradas',
    },
    {
        id: 28,
        title: 'Entrada: Liverpool vs Arsenal',
        description: 'Partido en Anfield - Fecha 11 Premier League',
        price: 17500,
        pictureUrl: EstadioLiverpool,
        category: 'entradas',
    },
    {
        id: 29,
        title: 'Entrada: Tottenham vs Liverpool ',
        description: 'Partido en Tottenham - Fecha 13 Premier League',
        price: 16000,
        pictureUrl: EstadioTottenham,
        category: 'entradas',
    },
    {
        id: 30,
        title: 'Entrada: Chelsea vs Manchester City',
        description: 'Partido en Stamford Bridge - Fecha 15 Premier League',
        price: 17500,
        pictureUrl: EstadioChelsea,
        category: 'entradas',
    },
    {
        id: 31,
        title: 'Entrada: Chelsea vs Tottenham',
        description: 'Partido en Stamford Bridge - Fecha 16 Premier League',
        price: 16000,
        pictureUrl: EstadioChelsea,
        category: 'entradas',
    },
    {
        id: 32,
        title: 'Entrada: Arsenal vs Manchester City',
        description: 'Partido en Emirates Stadium - Fecha 17 Premier League',
        price: 18000,
        pictureUrl: EstadioArsenal,
        category: 'entradas',
    },
    {
        id: 33,
        title: 'Entrada: Arsenal vs Tottenham',
        description: 'Derby del Norte de Londres en Emirates Stadium - Fecha 18 Premier League',
        price: 19000,
        pictureUrl: EstadioArsenal,
        category: 'entradas',
    }

];

export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
        const filtered = categoryId
            ? products.filter((prod) => prod.category === categoryId)
            : products;
        setTimeout(() => resolve(filtered), 1000);
    });
};

export const getSingleProduct = (id) => {
    return new Promise((resolve, reject) => {
        const product = products.find((prod) => prod.id === parseInt(id));
        setTimeout(() => {
            if (product) {
                resolve(product);
            } else {
                reject('Producto no encontrado');
            }
        }, 1000);
    });
};
