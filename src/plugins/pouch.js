import Vue from 'vue'
import PouchDB from 'pouchdb-browser';

Vue.mixin({
    methods: {
        pouch: (dbName = "theBookAlley") => new PouchDB(dbName)
    }
})