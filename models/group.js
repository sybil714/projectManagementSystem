const mongo = require('../lib/mongo');
const group = mongo.groups;

module.exports = {

    getAllGroups: function getAllGroups() {
        return group
            .find()
            .exec();
    },

    getgroupsByGroupID: function getgroupsByGroupID(id) {
        return group
            .findById(id)
            .exec();
    },

    getGroupsByObjectId1:function getGroupsByObjectId(ObjectId) {
        return group
            .findOne({member1ID:ObjectId})
            .exec()
    },
    getGroupsByObjectId2:function getGroupsByObjectId(ObjectId) {
        return group
            .findOne({member2ID:ObjectId})
            .exec()
    },
    getGroupsByObjectId3:function getGroupsByObjectId(ObjectId) {
        return group
            .findOne({member3ID:ObjectId})
            .exec()
    },
    getGroupsByObjectId4:function getGroupsByObjectId(ObjectId) {
        return group
            .findOne({member4ID:ObjectId})
            .exec()
    },
    getGroupsByObjectId5:function getGroupsByObjectId(ObjectId) {
        return group
            .findOne({member5ID:ObjectId})
            .exec()
    },
    getGroupsByObjectId6:function getGroupsByObjectId(ObjectId) {
        return group
            .findOne({member6ID:ObjectId})
            .exec()
    },


}

