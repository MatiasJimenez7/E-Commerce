import img2011 from "./img/2011.jpg"
import img2012 from "./img/2012.jpg"
import img2013 from "./img/2013.png"
import img2014 from "./img/2014.jpg"
import img2015 from "./img/2015.jpg"
import img2016 from "./img/2016.jpg"
import img2017 from "./img/2017.jpg"
import img2018 from "./img/2018.jpg"
import img2019 from "./img/2019.jpg"
import img2020 from "./img/2020.jpg"
import img2021 from "./img/2021.jpg"
import img2022 from "./img/Screenshot_11.png"

const pelotas = [
    {
        nombre:"Champion Ball 2011",
        precio:1500,
        id:1,
        img:img2011
    },
    {
        nombre:"Champion Ball 2012",
        precio:1500,
        id:2,
        img:img2012
    },
    {
        nombre:"Champion Ball 2013",
        precio:1500,
        id:3,
        img:img2013
    },
    {
        nombre:"Champion Ball 2014",
        precio:1500,
        id:4,
        img:img2014
    },
    {
        nombre:"Champion Ball 2015",
        precio:1500,
        id:5,
        img:img2015
    },
    {
        nombre:"Champion Ball 2016",
        precio:1500,
        id:6,
        img:img2016
    },
    {
        nombre:"Champion Ball 2017",
        precio:1500,
        id:7,
        img:img2017
    },
    {
        nombre:"Champion Ball 2018",
        precio:1500,
        id:8,
        img:img2018
    },
    {
        nombre:"Champion Ball 2019",
        precio:1500,
        id:9,
        img:img2019
    },
    {
        nombre:"Champion Ball 2020",
        precio:1500,
        id:10,
        img:img2020
    },
    {
        nombre:"Champion Ball 2021",
        precio:1500,
        id:11,
        img:img2021
    },
    {
        nombre:"Champion Ball 2022",
        precio:1500,
        id:12,
        img:img2022
    }
]


export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(pelotas)
        }, 600)
    })
}