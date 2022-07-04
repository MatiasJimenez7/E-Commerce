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
import img2022 from "./img/Adidas 2022 Champions League Final Ball (2).jpg"





const pelotas = [
    {
        nombre:"Champion Ball 2011",
        precio:5000,
        id:0,
        img:img2011,
        category:"red"
    },
    {
        nombre:"Champion Ball 2012",
        precio:2500,
        id:1,
        img:img2012,
        category:"default"

    },
    {
        nombre:"Champion Ball 2013",
        precio:1000,
        id:2,
        img:img2013,
        category:"default"

    },
    {
        nombre:"Champion Ball 2014",
        precio:2000,
        id:3,
        img:img2014,
        category:"default"

    },
    {
        nombre:"Champion Ball 2015",
        precio:3000,
        id:4,
        img:img2015,
        category:"default"

    },
    {
        nombre:"Champion Ball 2016",
        precio:4000,
        id:5,
        img:img2016,
        category:"default"

    },
    {
        nombre:"Champion Ball 2017",
        precio:5000,
        id:6,
        img:img2017,
        category:"default"

    },
    {
        nombre:"Champion Ball 2018",
        precio:6000,
        id:7,
        img:img2018,
        category:"default"

    },
    {
        nombre:"Champion Ball 2019",
        precio:7000,
        id:8,
        img:img2019,
        category:"red"

    },
    {
        nombre:"Champion Ball 2020",
        precio:8000,
        id:9,
        img:img2020,
        category:"default"
    },
    {
        nombre:"Champion Ball 2021",
        precio:9000,
        id:10,
        img:img2021,
        category:"red"

    },
    {
        nombre:"Champion Ball 2022",
        precio:10000,
        id:11,
        img:img2022,
        category:"default"

    }
]


export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(pelotas)
        }, 600)
    })
}

export const ballsReds = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(pelotas.filter(elem=>
                elem.category==="red"
            ))
        }, 600)
    })
}

