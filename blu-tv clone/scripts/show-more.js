const data =
[

    [
        {
            name: "blu-tv-1",
            url: "https://blutv-images.mncdn.com/q/t/i/bluv2/75/70x70/6295d4b4866ac31658881736"
        },

        {
            name: "cn",
            url: "https://blutv-images.mncdn.com/q/t/i/bluv2/75/70x70/63fdfa04866ac313f01126f7"
        },

        {
            name: "science",
            url: "https://blutv-images.mncdn.com/q/t/i/bluv2/75/70x70/63fdf69a866ac31180626aa0"
        },

        {
            name: "boomerang",
            url: "https://blutv-images.mncdn.com/q/t/i/bluv2/75/70x70/63fdf9e0866ac31b149aa2e2"
        }
    ],

    [
        {
            name: "E1",
            url: "https://blutv-images.mncdn.com/q/t/i/bluv2/75/70x70/63fdde1d866ac31b782685d0"
        },

        {
            name: "E2",
            url: "https://blutv-images.mncdn.com/q/t/i/bluv2/75/70x70/63fdde2f866ac31180626a2a"
        },

        {
            name: "discovery",
            url: "https://blutv-images.mncdn.com/q/t/i/bluv2/75/70x70/63fdf274866ac30c40f2aa94"
        },

        {
            name: "id",
            url: "https://blutv-images.mncdn.com/q/t/i/bluv2/75/70x70/63fde679866ac31180626a32"
        }
    ]
]

console.log(data[0][0])
const live_channels_container = document.getElementById('live_channels_container') //flex-container

const dahaFazlaGoster = document.getElementById('show_more')

let asama = 0;
dahaFazlaGoster.onclick = function() {

    if (asama >= data.length) return;

    data[asama].forEach(function(veri) {

        const div = document.createElement('div')
        div.classList.add('flex-item')

        const img = document.createElement('img')
        img.src = veri.url
        img.alt = veri.name

        div.appendChild(img)

        live_channels_container.appendChild(div)
    })

    asama += 1;
}