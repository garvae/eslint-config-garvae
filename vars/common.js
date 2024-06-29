const LINE_LENGTH = 120;

const IS_PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
  IS_PRODUCTION,
  LINE_LENGTH, 
}
