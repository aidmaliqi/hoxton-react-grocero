
export type StoreItem = {
    id: number
    name: string;
    price: number;
    inCart: number;
    imgSrc: string
}

const storeitems: StoreItem[] = [
    {
        id : 1,
        name : 'beetroot',
        price : 0.45,
        inCart : 0,
        imgSrc : 'Images/001-beetroot.svg'

    },
    {
        id : 2,
        name : 'carrot',
        price : 0.25,
        inCart : 0,
        imgSrc : 'Images/002-carrot.svg'

    },
    {
        id : 3,
        name : 'apple',
        price : 0.45,
        inCart : 0,
        imgSrc : 'Images/003-apple.svg'

    },
    {
        id : 4,
        name : 'apricot',
        price : 0.80,
        inCart : 0,
        imgSrc : 'Images/004-apricot.svg'

    },
    {
        id : 5,
        name : 'avocado',
        price : 1.25,
        inCart : 0,
        imgSrc : 'Images/005-avocado.svg'

    },
    {
        id : 6,
        name : 'bananas',
        price : 2,
        inCart : 0,
        imgSrc : 'Images/006-bananas.svg'

    },
    {
        id : 7,
        name : 'bell-pepper',
        price : 0.45,
        inCart : 0,
        imgSrc : 'Images/007-bell-pepper.svg'

    },
    {
        id : 8,
        name : 'berry',
        price : 0.15,
        inCart : 0,
        imgSrc : 'Images/008-berry.svg'

    },
    {
        id : 9,
        name : 'blueberry',
        price : 0.95,
        inCart : 0,
        imgSrc : 'Images/009-blueberry.svg'

    },
    {
        id : 10,
        name : 'eggplant',
        price : 1.45,
        inCart : 0,
        imgSrc : 'Images/010-eggplant.svg'

    },
];

export default storeitems

