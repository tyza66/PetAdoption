var page = new Vue({
    el: "#root",
    data: {
        username: "",
        password: "",
        notLogined: true,
        ZStableData: [],
        ZSdialogFormVisible: false,
        ZSupdateForm: {
            "id": 0,
            "jieshao": "",
            "name": "",
            "touxiang": ""
        },
        LYtableData: [],
        YBtableData: [],
        YStableData: [],
        SQtableData: []
    },
    beforeCreate: function () {
        that = this;
        axios.get('/admin/logined')
            .then(function (response) {
                if (response.data.data.username != null) {
                    that.notLogined = false;
                }
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
        axios.get('/adoption/findNotPass')
            .then(function (response) {
                that.LYtableData = response.data.data
                that.$forceUpdate()
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
        axios.get('/pets/findAll')
            .then(function (response) {
                that.ZStableData = response.data.data
                that.$forceUpdate()
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
        axios.get('/adoption/findNoPass')
            .then(function (response) {
                that.YBtableData = response.data.data
                that.$forceUpdate()
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
        axios.get('/adoption/findPass')
            .then(function (response) {
                that.YStableData = response.data.data
                that.$forceUpdate()
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
        axios.get('/pets/findAllWait')
            .then(function (response) {
                that.SQtableData = response.data.data
                that.$forceUpdate()
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    },
    methods: {
        login() {
            that = this;
            axios.post('/admin/login', {
                "id": 0,
                "password": that.password,
                "perminssion": 0,
                "username": that.username
            })
                .then(function (response) {
                    if (response.data.code == "0") {
                        that.$message({
                            message: '????????????',
                            type: 'success'
                        })
                        that.notLogined = false;
                    }
                    else {
                        that.$message.error('????????????');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        ZSdelete(id) {
            this.$confirm('?????????????????????????????????????????????????????????????', '??????', {
                confirmButtonText: '??????',
                cancelButtonText: '??????',
                type: 'warning'
            }).then(() => {
                axios.get('/pets/delete?id=' + id)
                    .then(function (response) {
                        if (response.data.code == 0) {
                            that.$message({
                                type: 'success',
                                message: '????????????!'
                            });
                            axios.get('/pets/findAll')
                                .then(function (response) {
                                    that.ZStableData = response.data.data
                                    that.$forceUpdate()
                                })
                                .catch(function (error) {
                                    console.log(error);
                                })
                                .finally(function () {
                                });
                        }
                        else {
                            that.$message.error('????????????');
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                    .finally(function () {
                    });

            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '???????????????'
                });
            });
        },
        ZSupdate(row) {
            this.ZSupdateForm.id = row.id
            this.ZSupdateForm.name = row.name
            this.ZSupdateForm.jieshao = row.jieshao
            this.ZSupdateForm.touxiang = row.touxiang
            this.ZSdialogFormVisible = true
        },
        ZSupdateQ() {
            this.ZSdialogFormVisible = false
            this.$message({
                type: 'info',
                message: '???????????????'
            });
        },
        ZSupdateY() {
            that = this;
            axios.post('/pets/update', {
                "id": that.ZSupdateForm.id,
                "jieshao": that.ZSupdateForm.jieshao,
                "name": that.ZSupdateForm.name,
                "touxiang": that.ZSupdateForm.touxiang
            })
                .then(function (response) {
                    if (response.data.code == "0") {
                        that.$message({
                            message: '????????????',
                            type: 'success'
                        })
                        that.ZSdialogFormVisible = false
                        axios.get('/pets/findAll')
                            .then(function (response) {
                                that.ZStableData = response.data.data
                                that.$forceUpdate()
                            })
                            .catch(function (error) {
                                console.log(error);
                            })
                            .finally(function () {
                            });
                    }
                    else {
                        that.$message.error('????????????');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        LYnoPass(id) {
            that = this;
            this.$confirm('????????????????????????????', '??????', {
                confirmButtonText: '??????',
                cancelButtonText: '??????',
                type: 'warning'
            }).then(() => {
                axios.get('/adoption/NoPass?id=' + id)
                    .then(function (response) {
                        if (response.data.code == 0) {
                            axios.get('/adoption/findNotPass')
                                .then(function (response) {
                                    that.LYtableData = response.data.data
                                    that.$forceUpdate()
                                })
                                .catch(function (error) {
                                    console.log(error);
                                })
                                .finally(function () {
                                });
                            axios.get('/adoption/findNoPass')
                                .then(function (response) {
                                    that.YBtableData = response.data.data
                                    that.$forceUpdate()
                                })
                                .catch(function (error) {
                                    console.log(error);
                                })
                                .finally(function () {
                                });
                            axios.get('/adoption/findPass')
                                .then(function (response) {
                                    that.YStableData = response.data.data
                                    that.$forceUpdate()
                                })
                                .catch(function (error) {
                                    console.log(error);
                                })
                                .finally(function () {
                                });
                            that.$message({
                                type: 'success',
                                message: '????????????!'
                            });
                        } else {
                            that.$message.error('????????????');
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                    .finally(function () {
                    });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '???????????????'
                });
            });
        },
        LYPass(id) {
            that = this;
            this.$confirm('????????????????????????????', '??????', {
                confirmButtonText: '??????',
                cancelButtonText: '??????',
                type: 'warning'
            }).then(() => {
                axios.get('/adoption/pass?id=' + id)
                    .then(function (response) {
                        if (response.data.code == 0) {
                            axios.get('/adoption/findNotPass')
                                .then(function (response) {
                                    that.LYtableData = response.data.data
                                    that.$forceUpdate()
                                })
                                .catch(function (error) {
                                    console.log(error);
                                })
                                .finally(function () {
                                });
                            axios.get('/adoption/findNoPass')
                                .then(function (response) {
                                    that.YBtableData = response.data.data
                                    that.$forceUpdate()
                                })
                                .catch(function (error) {
                                    console.log(error);
                                })
                                .finally(function () {
                                });
                            axios.get('/adoption/findPass')
                                .then(function (response) {
                                    that.YStableData = response.data.data
                                    that.$forceUpdate()
                                })
                                .catch(function (error) {
                                    console.log(error);
                                })
                                .finally(function () {
                                });
                            that.$message({
                                type: 'success',
                                message: '????????????!'
                            });
                        } else {
                            that.$message.error('????????????');
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                    .finally(function () {
                    });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '???????????????'
                });
            });
        },
        SQnoPass(id) {
            that = this;
            this.$confirm('????????????????????????????', '??????', {
                confirmButtonText: '??????',
                cancelButtonText: '??????',
                type: 'warning'
            }).then(() => {
                axios.get('/pets/notPassAnimal?id=' + id)
                    .then(function (response) {
                        if (response.data.code == 0) {
                            axios.get('/pets/findAllWait')
                                .then(function (response) {
                                    that.SQtableData = response.data.data
                                    that.$forceUpdate()
                                })
                                .catch(function (error) {
                                    console.log(error);
                                })
                                .finally(function () {
                                });
                            axios.get('/pets/findAll')
                                .then(function (response) {
                                    that.ZStableData = response.data.data
                                    that.$forceUpdate()
                                })
                                .catch(function (error) {
                                    console.log(error);
                                })
                                .finally(function () {
                                });
                            that.$message({
                                type: 'success',
                                message: '????????????!'
                            });
                        } else {
                            that.$message.error('????????????');
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                    .finally(function () {
                    });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '???????????????'
                });
            });
        },
        SQPass(id) {
            that = this;
            this.$confirm('????????????????????????????', '??????', {
                confirmButtonText: '??????',
                cancelButtonText: '??????',
                type: 'warning'
            }).then(() => {
                axios.get('/pets/passAnimal?id=' + id)
                    .then(function (response) {
                        if (response.data.code == 0) {
                            axios.get('/pets/findAllWait')
                                .then(function (response) {
                                    that.SQtableData = response.data.data
                                    that.$forceUpdate()
                                })
                                .catch(function (error) {
                                    console.log(error);
                                })
                                .finally(function () {
                                });
                            axios.get('/pets/findAll')
                                .then(function (response) {
                                    that.ZStableData = response.data.data
                                    that.$forceUpdate()
                                })
                                .catch(function (error) {
                                    console.log(error);
                                })
                                .finally(function () {
                                });
                            that.$message({
                                type: 'success',
                                message: '????????????!'
                            });
                        } else {
                            that.$message.error('????????????');
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                    .finally(function () {
                    });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '???????????????'
                });
            });
        }
    }
})