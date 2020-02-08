const slugify = require('slugify')

exports.makeBlogPath = (title) => {
  const slug = slugify(title, {remove: /[*+~.(),'"!:@]/g, lower: true})
  return `/${slug}`
}
