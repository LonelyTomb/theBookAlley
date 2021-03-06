import Vue from 'vue'
import PouchDB from 'pouchdb-browser'

PouchDB.plugin(require('pouchdb-find'))
PouchDB.plugin(require('pouchdb-live-find'))
    // PouchDB.plugin(require('pouchdb-authentication'))

Vue.use(require('vue-pouch'), {
    pouch: PouchDB, // optional if `PouchDB` is available on the global object
    defaultDB: 'theBookAlley' // the database to use if none is specified in the pouch setting of the vue component
})