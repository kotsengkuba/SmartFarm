$(function () {
        $('#container').highcharts({
            chart: {
                type: 'spline'
            },
            title: {
                text: '[Sample Data] Temperature History'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'Temperature (C)'
                },
                min: 22,
                minorGridLineWidth: 1,
                gridLineWidth: 0.1,
                alternateGridColor: null,
                plotBands: [{
                    from: 20,
                    to: 25.5,
                    color: 'rgba(252, 79, 106, 0.5)',
                    label: {
                        text: '',
                        style: {
                            color: '#606060'
                        }
                    }
                }, {
                    from: 25.5,
                    to: 26.5,
                    color: 'rgba(255, 255, 0, 0.5)',
                    label: {
                        text: '',
                        style: {
                            color: '#606060'
                        }
                    }
                }, {
                    from: 26.5,
                    to: 27.5,
                    color: 'rgba(150, 250, 100, 0.5)',
                    label: {
                        text: '',
                        style: {
                            color: '#606060'
                        }
                    }
                }, {
                    from: 27.5,
                    to: 29.5,
                    color: 'rgba(255, 255, 0, 0.5)',
                    label: {
                        text: '',
                        style: {
                            color: '#606060'
                        }
                    }
                }, { 
                    from: 29.5,
                    to: 40,
                    color: 'rgba(252, 79, 106, 0.5)',
                    label: {
                        text: '',
                        style: {
                            color: '#606060'
                        }
                    }
                }]
            },
            tooltip: {
                valueSuffix: 'C'
            },
            plotOptions: {
                spline: {
                    lineWidth: 4,
                    states: {
                        hover: {
                            lineWidth: 5
                        }
                    },
                    marker: {
                        enabled: false
                    },
                    pointInterval: 3600000, // one hour
                    pointStart: Date.UTC(2009, 9, 6, 0, 0, 0)
                }
            },
            series: [
            /*{
                name: 'Sensor1',
                data: [25.4, 25.5, 26, 26.7, 27, 26.5, 26.2, 26, 25.7, 24.6, 24, 23.6, 23.5, 23.6, 24.4, 25, 27.4, 28.8, 29.3],
            },
                {
                name: 'Sensor2',
                data: [25.4, 25.4, 25.8, 26.7, 26.8, 26.5, 26.2, 26, 25.7, 24.4, 24.35, 23.6, 23.5, 24.6, 25.4, 26, 27.1, 28.8, 29],
            },*/
            {
                name: 'Temperature',
                data: [24.5, 24.20, 23.6, 24.5, 25.6, 25.7, 25.7, 26, 26.1, 26.3, 27.25, 28.8, 29.15, 28.4, 28.3, 27.7, 27.4, 27.3, 27.1, 26.5, 26, 25.7, 25.5, 25.6, 25.5, 25.4],
            },
            ]
            ,
            navigation: {
                menuItemStyle: {
                    fontSize: '10px'
                }
            }
        });
    });
    
