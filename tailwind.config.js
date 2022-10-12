/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hip": "url('https://www.apple.com/v/home/as/images/heroes/iphone-14/hero_iphone14__fjmsqstr1ceq_small.jpg')",
        "lghip": "url('https://www.apple.com/v/home/as/images/heroes/iphone-14/hero_iphone14__fjmsqstr1ceq_largetall.jpg')",
        "hipp":"url('https://www.apple.com/v/home/as/images/heroes/iphone-14-pro/hero_iphone14pro__e5xbgo5ffhg2_small.jpg')",
        "lghipp":"url('https://www.apple.com/v/home/as/images/heroes/iphone-14-pro/hero_iphone14pro__e5xbgo5ffhg2_largetall.jpg')",
        "hiw":"url('https://www.apple.com/v/home/as/images/heroes/apple-watch-ultra/hero_apple_watch_ultra__dtz0f3e8oscy_small.jpg')",
        "lghiw":"url('https://www.apple.com/v/home/as/images/heroes/apple-watch-ultra/hero_apple_watch_ultra__dtz0f3e8oscy_largetall.jpg')",
        "hsw":"url('https://www.apple.com/v/home/as/images/promos/apple-watch-series-8/promo_apple_watch_series_8__ch7rexplmihe_small.jpg')",
        "lghsw":"url('https://www.apple.com/v/home/as/images/promos/apple-watch-series-8/promo_apple_watch_series_8__ch7rexplmihe_large.jpg')",
        "hap":"url('https://www.apple.com/v/home/as/images/promos/airpods-pro/promo_airpods_pro_avail__gaxggskofx6y_small.jpg')",
        "lghap":"url('https://www.apple.com/v/home/as/images/promos/airpods-pro/promo_airpods_pro_avail__gaxggskofx6y_large.jpg')",

        "hse":"url('https://www.apple.com/v/home/as/images/promos/apple-watch-se/promo_apple_watch_se__f9702l6odgi2_small.jpg')",
        "lghse":"url('https://www.apple.com/v/home/as/images/promos/apple-watch-se/promo_apple_watch_se__f9702l6odgi2_large.jpg')",
        "hfit":"url('https://www.apple.com/v/home/as/images/promos/apple-fitness-plus-iphone/promo-apple-fitness-plus-iphone__bzeal882mv7m_small.jpg')",
        "lghfit":"url('https://www.apple.com/v/home/as/images/promos/apple-fitness-plus-iphone/promo-apple-fitness-plus-iphone__bzeal882mv7m_large.jpg')",
        "hma":"url('https://www.apple.com/v/home/as/images/promos/macbook-air/promo_macbookair__fywl7i82fueu_small.png')",
        "lghma":"url('https://www.apple.com/v/home/as/images/promos/macbook-air/promo_macbookair__fywl7i82fueu_large.png')",
        "hc":"url('https://www.apple.com/v/home/as/images/promos/apple-card/tile__cauwwcyyn9hy_small.jpg')",
        "lghc":"url('https://www.apple.com/v/home/as/images/promos/apple-card/tile__cauwwcyyn9hy_large.jpg')",

        "hiwlogo":"url('https://www.apple.com/v/home/as/images/logos/apple-watch-ultra/hero_logo_apple_watch_ultra__etygmmkwgfma_small.png')",
        "hswlogo":"url('https://www.apple.com/v/home/as/images/logos/apple-watch-series-8/promo_logo_apple_watch_series_8__ee6riplsucuq_small.png')",
        "hselogo":"url('https://www.apple.com/v/home/as/images/logos/apple-watch-se/promo_logo_apple_watch_se__b85vr9ri02gi_small.png')",
        "hfitlogo":"url('https://www.apple.com/v/home/as/images/logos/apple-fitness-plus-iphone/promo_logo_fitness_plus_iphone__dpayetemakq6_small.png')",
        "hmalogo":"url('https://www.apple.com/v/home/as/images/logos/macbook-air/logo_promo_macbookair__hy9ktdqqtv2a_small.png')",
        "hclogo":"url('https://www.apple.com/v/home/as/images/logos/apple-card/logo__dcojfwkzna2q_small.png')",
        
        "c1sm":"url('https://is5-ssl.mzstatic.com/image/thumb/Features112/v4/a7/05/d2/a705d26a-420c-9b6a-2170-b9c69e531892/c5a75689-5423-4fb4-a20c-01922d28c083.png/548x1186.jpg')",
        "c1lg":"url('https://is5-ssl.mzstatic.com/image/thumb/nnWkHXH4wyIt0sZovHx0tA/1250x703.jpg')",
        "c2sm":"url('https://is1-ssl.mzstatic.com/image/thumb/Features112/v4/3d/1a/d6/3d1ad6e8-0b43-79f1-c4c0-6d9bbe411238/daf4d743-d26b-405c-9ca7-0e7b744ecd67.png/548x1186.jpg')",
        "c2lg":"url('https://is5-ssl.mzstatic.com/image/thumb/7SeRlnCzKlgeqrg6-ixkig/1250x703.jpg')",
        "c3sm":"url('https://is5-ssl.mzstatic.com/image/thumb/Features112/v4/31/5f/c1/315fc1e6-9bd3-9cdc-7d99-39c118d3dfb2/d9c681b1-464e-434c-a636-1656c1b0e48b.png/548x1186.jpg')",
        "c3lg":"url('https://is2-ssl.mzstatic.com/image/thumb/_dJgnWG8W30_qMRZYCEx-Q/1250x703.jpg')",
        "c4sm":"url('https://is3-ssl.mzstatic.com/image/thumb/Features112/v4/1f/ee/83/1fee8392-4edf-4bff-703f-dcebecca0971/618c4cdb-f9d3-4f89-9573-18d8da043128.png/548x1186.jpg')",
        "c4lg":"url('https://is5-ssl.mzstatic.com/image/thumb/ewq0-5ZSairVdRtcg43s0w/1250x703.jpg ')",
        "c5sm":"url('https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/50/1e/58/501e5882-3137-209e-f5b1-c5c5e2250a34/cc8dc554-38ad-4427-bc9a-1152b760ed2f.png/548x1186.jpg')",
        "c5lg":"url('https://is2-ssl.mzstatic.com/image/thumb/vkRecJ7JSiYQecCMWMmzOA/1250x703')",
        
        "Soon":"url('/src/i15.jpg')",
      },
    },
  },
  plugins: [],
}
