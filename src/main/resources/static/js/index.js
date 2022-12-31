var page = new Vue({
    el: "#root",
    data: {
        swiper: [],
        pets: [],
        LYruleForm: {
            aid: "",
            name: '',
            phone: "",
            home: "",
            tiaojian: "",
            other: ""
        },
        LYrules: {
            aid: [{ required: true, message: '请输入要领养宠物的领养编号', trigger: 'blur' },
            { min: 2, max: 255, message: '长度在 2 到 255 个字符', trigger: 'blur' }],
            name: [{ required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 2, max: 255, message: '长度在 2 到 255 个字符', trigger: 'blur' }],
            phone: [{ required: true, message: '请输入电话号', trigger: 'blur' },
            { min: 2, max: 255, message: '长度在 2 到 255 个字符', trigger: 'blur' }],
            home: [{ required: true, message: '请输入详细家庭住址', trigger: 'blur' },
            { min: 2, max: 255, message: '长度在 2 到 255 个字符', trigger: 'blur' }],
            tiaojian: [{ required: true, message: '请输入养宠条件', trigger: 'blur' },
            { min: 2, max: 255, message: '长度在 2 到 255 个字符', trigger: 'blur' }],
            other: [{ required: true, message: '请输入备注和其他说明', trigger: 'blur' },
            { min: 2, max: 255, message: '长度在 2 到 255 个字符', trigger: 'blur' }]
        }
    },
    beforeCreate: function () {
        //芭蕾独角兽，彩虹小马
        that = this;
        axios.get('/swiper/findAll')
            .then(function (response) {
                that.swiper = response.data.data
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
        axios.get('/pets/findAll')
            .then(function (response) {
                that.pets = response.data.data
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    },
    methods: {
        submitLYForm(formName) {
            that = this;
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    that.$confirm('确定表单信息无误方可提交，若为无意义信息则申请不会被受理！', '注意', {
                        confirmButtonText: '提交',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        axios.post('/adoption/update', {
                            aid: that.LYruleForm.aid,
                            name: that.LYruleForm.name,
                            phone: that.LYruleForm.phone,
                            home: that.LYruleForm.home,
                            tiaojian: that.LYruleForm.tiaojian,
                            other: that.LYruleForm.other
                        })
                            .then(function (response) {
                                if (response.data.code == "0") {
                                    that.$message({
                                        message: '提交成功',
                                        type: 'success'
                                    })
                                    that.LYruleForm.aid = ""
                                    that.LYruleForm.name = ""
                                    that.LYruleForm.phone = ""
                                    that.LYruleForm.home = ""
                                    that.LYruleForm.tiaojian = ""
                                    that.LYruleForm.other = ""
                                }
                                else {
                                    that.$message.error('提交失败');
                                }
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消提交'
                        });
                    });
                } else {
                    return false;
                }
            });
        },
        resetLYForm() {
            this.LYruleForm.aid = ""
            this.LYruleForm.name = ""
            this.LYruleForm.phone = ""
            this.LYruleForm.home = ""
            this.LYruleForm.tiaojian = ""
            this.LYruleForm.other = ""
        }
    }
})
