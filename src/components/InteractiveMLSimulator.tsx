import React, { useState } from 'react';
import { Play, RotateCcw, CheckCircle2, Cpu, BarChart2, Layers, Sliders, Database } from 'lucide-react';

export const InteractiveMLSimulator: React.FC = () => {
  const [selectedDataset, setSelectedDataset] = useState('student_academic_perf');
  const [selectedModel, setSelectedModel] = useState('decision_tree');
  const [trainRatio, setTrainRatio] = useState(80);
  const [isTraining, setIsTraining] = useState(false);
  const [trainedResult, setTrainedResult] = useState<{
    accuracy: number;
    precision: number;
    recall: number;
    f1Score: number;
    matrix: number[][];
  } | null>(null);

  const handleRunPipeline = () => {
    setIsTraining(true);
    setTrainedResult(null);

    setTimeout(() => {
      // Generate realistic dynamic results based on dataset and model
      let baseAcc = 88;
      if (selectedModel === 'decision_tree') baseAcc = 91.4;
      if (selectedModel === 'random_forest') baseAcc = 95.8;
      if (selectedModel === 'knn') baseAcc = 87.2;
      if (selectedModel === 'linear_reg') baseAcc = 84.5;

      const acc = Math.min(99.2, baseAcc + (trainRatio - 70) * 0.15 + (Math.random() * 2 - 1));
      const prec = +(acc * 0.98).toFixed(1);
      const rec = +(acc * 0.96).toFixed(1);
      const f1 = +(2 * (prec * rec) / (prec + rec)).toFixed(1);

      setTrainedResult({
        accuracy: +acc.toFixed(1),
        precision: prec,
        recall: rec,
        f1Score: f1,
        matrix: [
          [Math.round(acc * 1.2), Math.round((100 - acc) * 0.4)],
          [Math.round((100 - acc) * 0.3), Math.round(acc * 1.1)]
        ]
      });
      setIsTraining(false);
    }, 900);
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 text-slate-100 font-sans shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span>Live Interactive Demo</span>
          </div>
          <h4 className="text-lg font-bold text-white mt-1">
            No-Code ML Visual Workflow Simulator
          </h4>
          <p className="text-xs text-slate-400">
            Simulate configuring an AI dataset pipeline, model selection, and training evaluation.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setSelectedDataset('student_academic_perf');
              setSelectedModel('decision_tree');
              setTrainRatio(80);
              setTrainedResult(null);
            }}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1 transition-colors"
            title="Reset Pipeline"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Interactive Workflow Node Drag/Select Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        
        {/* Node 1: Dataset Input */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
              <Database className="w-4 h-4" />
              <span>1. Dataset & Preprocessing</span>
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>

          <div className="space-y-2">
            <label className="text-[11px] text-slate-400 block font-mono">Select Input Stream:</label>
            <select
              value={selectedDataset}
              onChange={(e) => setSelectedDataset(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
            >
              <option value="student_academic_perf">Student Academic Performance Dataset (CSV)</option>
              <option value="financial_wealth_goals">Wealth & Investment Forecast Stream</option>
              <option value="cyber_network_logs">Cybersecurity Anomaly Detection Logs</option>
            </select>
          </div>

          <div className="text-[11px] text-slate-400 font-mono bg-slate-900/60 p-2 rounded-lg border border-slate-800">
            Features: 12 attributes | Records: 2,500 samples
          </div>
        </div>

        {/* Node 2: Algorithm & Hyperparameters */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-400">
              <Layers className="w-4 h-4" />
              <span>2. ML Algorithm Selector</span>
            </div>
            <span className="w-2 h-2 rounded-full bg-purple-500" />
          </div>

          <div className="space-y-2">
            <label className="text-[11px] text-slate-400 block font-mono">Select Model:</label>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
            >
              <option value="decision_tree">Decision Tree Classifier (Beginner-Friendly)</option>
              <option value="random_forest">Random Forest Ensemble (High Accuracy)</option>
              <option value="knn">K-Nearest Neighbors (KNN)</option>
              <option value="linear_reg">Logistic / Linear Regression</option>
            </select>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
              <span>Train/Test Split:</span>
              <span className="text-purple-400">{trainRatio}% Train / {100 - trainRatio}% Test</span>
            </div>
            <input
              type="range"
              min={60}
              max={90}
              step={5}
              value={trainRatio}
              onChange={(e) => setTrainRatio(Number(e.target.value))}
              className="w-full accent-purple-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Node 3: Execution Control */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <Sliders className="w-4 h-4" />
              <span>3. Execution & Evaluation</span>
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Runs Flask backend inference engine, computes model metrics, and renders accuracy matrix.
          </p>

          <button
            onClick={handleRunPipeline}
            disabled={isTraining}
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 disabled:opacity-50 transition-all"
          >
            {isTraining ? (
              <>
                <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Processing Pipeline...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Execute ML Pipeline</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Results Output Canvas */}
      {trainedResult && (
        <div className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-emerald-500/30 animate-fade-in space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
              <CheckCircle2 className="w-4 h-4" />
              <span>Pipeline Completed Successfully</span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">Response Time: 240ms</span>
          </div>

          {/* Metric Bar Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
              <div className="text-[10px] text-slate-400 font-mono uppercase">Accuracy</div>
              <div className="text-xl font-bold text-emerald-400 font-mono mt-0.5">{trainedResult.accuracy}%</div>
            </div>
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
              <div className="text-[10px] text-slate-400 font-mono uppercase">Precision</div>
              <div className="text-xl font-bold text-blue-400 font-mono mt-0.5">{trainedResult.precision}%</div>
            </div>
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
              <div className="text-[10px] text-slate-400 font-mono uppercase">Recall</div>
              <div className="text-xl font-bold text-purple-400 font-mono mt-0.5">{trainedResult.recall}%</div>
            </div>
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
              <div className="text-[10px] text-slate-400 font-mono uppercase">F1 Score</div>
              <div className="text-xl font-bold text-amber-400 font-mono mt-0.5">{trainedResult.f1Score}%</div>
            </div>
          </div>

          {/* Confusion Matrix Table */}
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs space-y-1">
              <span className="font-semibold text-slate-200 block">Confusion Matrix Breakdown:</span>
              <p className="text-slate-400 text-[11px]">
                High true positives indicates clear decision boundaries for student ML understanding.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-1.5 font-mono text-xs text-center">
              <div className="p-2 bg-emerald-500/20 text-emerald-300 rounded border border-emerald-500/30">
                TP: {trainedResult.matrix[0][0]}
              </div>
              <div className="p-2 bg-rose-500/10 text-rose-300 rounded border border-rose-500/20">
                FP: {trainedResult.matrix[0][1]}
              </div>
              <div className="p-2 bg-amber-500/10 text-amber-300 rounded border border-amber-500/20">
                FN: {trainedResult.matrix[1][0]}
              </div>
              <div className="p-2 bg-emerald-500/20 text-emerald-300 rounded border border-emerald-500/30">
                TN: {trainedResult.matrix[1][1]}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
