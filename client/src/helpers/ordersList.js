import orderImage from './../img/order-product-image.png'
import statusImageDone from './../img/status__image.png'
import statusImageInprogress from './../img/order-inprogress-status.png'


const ordersProducts = [

    {
        id: 1,
        status: 'Done',
        title: 'iPhone 14 Pro',
        img: orderImage,
        orderStatusImg: statusImageDone,
        quantity: '1',
        price: '299.99$',
        pickup: 'Oleksandrivskiy Prospekt 22',
        delivery: 'Nova Poshta',
        total: '299.99$'
    },
    {
        id: 2,
        status: 'In progress',
        title: 'iPhone 14 Pro',
        img: orderImage,
        orderStatusImg: statusImageInprogress,
        quantity: '1',
        price: '499.99$',
        pickup: 'Oleksandrivskiy Prospekt 22',
        delivery: 'Nova Poshta',
        total: '299.99$'
    },
    {
        id: 3,
        status: 'In progress',
        title: 'iPhone 14 Pro',
        img: orderImage,
        orderStatusImg: statusImageInprogress,
        quantity: '1',
        price: '499.99$',
        pickup: 'Oleksandrivskiy Prospekt 22',
        delivery: 'Nova Poshta',
        total: '299.99$'
    },
    {
        id: 4,
        status: 'In progress',
        title: 'iPhone 14 Pro',
        img: orderImage,
        orderStatusImg: statusImageInprogress,
        quantity: '1',
        price: '499.99$',
        pickup: 'Oleksandrivskiy Prospekt 22',
        delivery: 'Nova Poshta',
        total: '299.99$'
    },
    {
        id: 5,
        status: 'In progress',
        title: 'iPhone 14 Pro',
        img: orderImage,
        orderStatusImg: statusImageInprogress,
        quantity: '1',
        price: '499.99$',
        pickup: 'Oleksandrivskiy Prospekt 22',
        delivery: 'Nova Poshta',
        total: '299.99$'
    },
];


export { ordersProducts };