// 'use client'

import React, { useState, useEffect } from 'react'
import { Chart } from 'primereact/chart'
import styles from './ChartBar.module.scss'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'

export const ChartBar = ({ title = 'Nuevos usuarios por mes', data, methods }) => {
  const [chartData, setChartData] = useState({})
  const [chartOptions, setChartOptions] = useState({})
  const [yearOptions, setYearOptions] = useState([])
  const [userData, setUserData] = useState([])

  useEffect(() => {
    if (data) {
      const yearOptions = data.years.map((item) => (
        { label: item, value: item }
      ))
      setYearOptions(yearOptions)
      if (yearOptions.length > 0) {
        methods.setValue('year', yearOptions[0].value)
      }
    }
  }, [data])

  useEffect(() => {
    if (data) {
      const [result] = data.data.filter((item) => (
        item.year === methods.watch('year')
      ))
      if (result) {
        setUserData([result.data])
      }
    }
  }, [data, methods.watch('year')])

  // const userData2023 = [
  //   { x: 'Ene', y: 0 },
  //   { x: 'Feb', y: 0 },
  //   { x: 'Mar', y: 0 },
  //   { x: 'Abr', y: 0 },
  //   { x: 'May', y: 0 },
  //   { x: 'Jun', y: 0 },
  //   { x: 'Jul', y: 0 },
  //   { x: 'Ago', y: 0 },
  //   { x: 'Sep', y: 0 },
  //   { x: 'Oct', y: 0 },
  //   { x: 'Nov', y: 0 },
  //   { x: 'Dic', y: 0 }
  // ]

  useEffect(() => {
    const data = {
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      datasets: [
        {
          data: userData,
          backgroundColor: '#373d4f',
          borderColor: '#373d4f',
          barThickness: 20,
          borderRadius: 5
        }
      ]
    }

    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      animation: true,
      plugins: {
        legend: {
          display: false,
          labels: {
            color: '#000000'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#7e8a91',
            font: {
              weight: 500
            }
          },
          grid: {
            display: false,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: '#7e8a91'
          },
          grid: {
            color: '#d5d8e0',
            drawBorder: false
          }
        }
      }
    }
    setChartData(data)
    setChartOptions(options)
  }, [userData, methods.watch('year')])

  return (
    <div className={styles.chart}>
      <div className={styles.chart_header}>
        <div>{title}</div>
        <div>
          <Dropdown
            name='year'
            options={yearOptions}
            optionLabel='label'
            placeholder=''
            variant='primary'
            height='35px'
          />
        </div>
      </div>
      <Chart type='bar' data={chartData} options={chartOptions} />
    </div>
  )
}
