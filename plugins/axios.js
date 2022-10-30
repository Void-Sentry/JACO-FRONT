export default function ({ $axios }) {
    $axios.onResponse((req, options, res) => {
      console.log('Making request to ' + req.url)
      console.log('Options :', options)
      console.log('Response data :', res.body)
    })
  }
  