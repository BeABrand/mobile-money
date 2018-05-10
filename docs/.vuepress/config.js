module.exports = {
    title: 'Mobile Money API',
    description: "Mobile Money Payments API in Kenya (MPESA, EQUITY/EQUITEL,T-CASH). Supports B2B, B2C and C2B ",
    home: true,
    serviceWorker: true,
    themeConfig: {
        repo: 'samerior/mobile-money',
        // editLinks: true,
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Samerior Group', link: 'https://www.samerior.com'},
            {
                text: 'Developer Portal',
                items: [
                    {text: 'Safaricom Developer Portal', link: 'https://developer.safaricom.co.ke/'},
                    {text: 'Equity Developer Portal', link: 'https://developers.equitybankgroup.com/'},
                ]
            }
        ],
        sidebar: [
            '/',
            ['/guide/introduction', 'Introduction'],
            ['/about', 'About Samerior Group'],
            ['/guide/installation', 'Installation'],
            {
                title: 'Mpesa',
                collapsable: false,
                children: [
                    '/mpesa/'
                ]
            },
        ]
    }
}
