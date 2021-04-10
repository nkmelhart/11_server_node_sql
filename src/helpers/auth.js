import passport from 'passport'
import {Strategy} from 'passport-local'

passport.use(new Strategy((username, password, done) => {
    if (username === process.env.API_USERNAME && password === process.env.API_PASSWORD) {
        return done(null, username)
    }
    return done(null, false)
}))

export default passport