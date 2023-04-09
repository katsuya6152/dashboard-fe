import { Card } from '@mantine/core'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import ConfusionMatrix from '@/components/learning-results/ConfusionMatrix'
import EvaluationRing from '@/components/learning-results/EvaluationRing'
import ImportanceBar from '@/components/learning-results/ImportanceBar'
import Memo from '@/components/learning-results/MemoArea'
import RocCurve from '@/components/learning-results/RocCurve'
import VersionSelect from '@/components/learning-results/Select'
import TestTable from '@/components/learning-results/TestTable'
import SideBar from '@/components/SideBar'
import { ax } from '@/libs/axios'
import { EvaluationType } from '@/types'

type EvaluationValueType = {
  accuracy: number
  precision: number
  recall: number
}
type ImportanceDataType = {
  id: string
  create: string
  importance: string
  version: number
}

const EvaluationCalc = (tp: number, fp: number, tn: number, fn: number) => {
  const accuracy = (tp + tn) / (tp + fp + tn + fn)
  const precision = tp / (tp + fp)
  const recall = tp / (tp + fn)

  return {
    accuracy: accuracy,
    precision: precision,
    recall: recall,
  }
}
const ChangeRocCurveData = (tprArr: number[], fprArr: number[]) => {
  return fprArr.map((fpr, index) => ({
    tpr: tprArr[index],
    fpr: fpr,
  }))
}
const ChangeImportanceData = (
  str: string,
): { feature: string; value: number }[] => {
  const obj = JSON.parse(str).importance as Record<string, number>
  const entries = Object.entries(obj)
  return entries.map((data) => ({
    feature: data[0],
    value: data[1],
  }))
}

const LearningResults: React.FC<Props> = ({ evaluation, importance }) => {
  const [active, setActive] = useState(1)
  const [evaluationValue, setEvaluationValue] = useState<EvaluationValueType>({
    accuracy: 0,
    precision: 0,
    recall: 0,
  })
  const [confusionMatrixData] = useState({
    tp: evaluation[0].TP,
    fp: evaluation[0].FP,
    tn: evaluation[0].TN,
    fn: evaluation[0].FN,
  })
  const [rocCurveData, setRocCurveData] = useState([
    {
      tpr: 0,
      fpr: 0,
    },
  ])
  const auc = evaluation[0].AUC.toFixed(4)
  const [importanceData, setImportance] = useState([
    {
      feature: 'feature',
      value: 1,
    },
  ])

  const setActivePage = (index: number) => {
    setActive(index)
  }

  useEffect(() => {
    setEvaluationValue(
      EvaluationCalc(
        evaluation[0].TP,
        evaluation[0].FP,
        evaluation[0].TN,
        evaluation[0].FN,
      ),
    )

    setRocCurveData(ChangeRocCurveData(evaluation[0].TPR, evaluation[0].FPR))
  }, [evaluation])

  useEffect(() => {
    setImportance(ChangeImportanceData(importance[0].importance))
  }, [importance])

  return (
    <>
      <Head>
        <title>Learning results Page</title>
        <meta name="description" content="Learning results Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-white">
        <div className="flex h-screen">
          <SideBar active={active} setActive={setActivePage} />
          <div className="flex w-full h-full">
            <div className="w-1/2 p-10">
              <VersionSelect />
              <div className="flex justify-center my-6">
                <EvaluationRing
                  label={'Accuracy'}
                  value={evaluationValue.accuracy}
                />
                <EvaluationRing
                  label={'Precision'}
                  value={evaluationValue.precision}
                />
                <EvaluationRing
                  label={'Rcall'}
                  value={evaluationValue.recall}
                />
              </div>
              <div className="flex gap-4 h-60">
                <ConfusionMatrix data={confusionMatrixData} />
                <RocCurve data={rocCurveData} auc={auc} />
              </div>
              <div className="mt-8">
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <TestTable />
                </Card>
              </div>
            </div>
            <div className="w-1/2 p-12">
              <div className="h-3/4 mb-6">
                <ImportanceBar data={importanceData} />
              </div>
              <div className="h-1/4">
                <Memo />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

type Props = {
  evaluation: EvaluationType[]
  importance: ImportanceDataType[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [evaluationRes, importanceRes] = await Promise.all([
    ax.get<EvaluationType[]>('/results/evaluation', {
      params: { version: 0 },
    }),
    ax.get<ImportanceDataType[]>('/results/importance', {
      params: { version: 0 },
    }),
  ])

  const evaluationData = evaluationRes.data
  const importanceData = importanceRes.data
  return { props: { evaluation: evaluationData, importance: importanceData } }
}

export default LearningResults
