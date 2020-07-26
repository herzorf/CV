let myChart = echarts.init(document.getElementById('main'));

let option =  {
    media:[
        {
            query: {maxWidth :400},
            option: {
                radar: {
                    name: {
                        textStyle: {
                            color: '#000',
                            backgroundColor: '#f7f7ee',
                            borderRadius: 3,
                            padding: [1, 1],
                            fontSize:12,
                        }
                    },
                    indicator: [
                        { name: 'React', max: 100},
                        { name: 'Vue', max: 100},
                        { name: 'ES6', max: 100},
                        { name: 'Node.js', max: 100},
                        { name: 'CSS', max: 100},
                        { name: 'H5', max: 100}
                    ]
                },
                series: [{
                    type: 'radar',
                    data: [
                        {
                            value: [70, 80, 90, 80, 75, 80],
                            name: '我的技能'
                        }
                    ]
                }]
            }
        },
        {
            query:{minWidth:400},
            radar: {
                name: {
                    textStyle: {
                        color: '#000',
                        backgroundColor: '#f7f7ee',
                        borderRadius: 3,
                        padding: [1, 1],
                        fontSize: 20
                    }
                },
                indicator: [
                    { name: 'React', max: 100},
                    { name: 'Vue', max: 100},
                    { name: 'ES6', max: 100},
                    { name: 'Node.js', max: 100},
                    { name: 'CSS', max: 100},
                    { name: 'H5', max: 100}
                ]
            },
            series: [{
                type: 'radar',
                data: [
                    {
                        value: [70, 80, 90, 80, 75, 80],
                        name: '我的技能'
                    }
                ]
            }]
        }
    ],

};

myChart.setOption(option);