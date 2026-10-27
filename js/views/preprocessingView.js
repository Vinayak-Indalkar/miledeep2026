// Pre-Processing Module Views (Interactive Floor Operations & Tracking)

import { TabBar } from '../components/tabBar.js';
import { DataTable } from '../components/table.js';
import { Modal } from '../components/modal.js';
import { Toast } from '../components/toast.js';
import { ERP_DATA } from '../data/mockData.js';

export const PreprocessingView = {
  // State storage for Pre-Processing floor data
  state: {
    deheadingBatches: [
      {
        sNo: 1,
        id: 'DH-2026-101',
        arrivalCode: 'LOT-2026-00125',
        lotNo: 'LOT-2026-00125',
        arrivalDate: '2026-10-06',
        productionPlant: 'DFL UNIT-5 (JPT)',
        center: 'Bhimavaram Center #1',
        deheadingStation: 'Table #1 & #2',
        deheadingDate: '06/10/2026',
        shift: 'Shift A (Day)',
        supervisor: 'Laxmi Narayana',
        checkingCount2: 44,
        hlCount: 28,
        honCount: 42,
        honQuantityKgs: 4200,
        hlQuantityKgs: 2772,
        countNetYieldPct: 66.0,
        yieldPct: 66.0,
        sampleYieldPct: 66.2,
        iceConsumption: '450 Kg',
        remarks: 'Normal recovery, zero antibiotic detection.',
        species: 'Vannamei Shrimp',
        inputHonWt: 4200,
        outputDhWt: 2772,
        recoveryPct: 66.0,
        wasteHeadWt: 1386,
        rejectionsWt: 42,
        lineNo: 'Table #1 & #2',
        operators: 36,
        status: 'COMPLETED',
        startTime: '08:30',
        endTime: '12:00'
      },
      {
        sNo: 2,
        id: 'DH-2026-102',
        arrivalCode: 'LOT-2026-00126',
        lotNo: 'LOT-2026-00126',
        arrivalDate: '2026-10-06',
        productionPlant: 'DFL UNIT-3 (PSP)',
        center: 'Kakinada Sea Intake #2',
        deheadingStation: 'Table #3',
        deheadingDate: '06/10/2026',
        shift: 'Shift A (Day)',
        supervisor: 'K. Subba Rao',
        checkingCount2: 30,
        hlCount: 18,
        honCount: 28,
        honQuantityKgs: 3500,
        hlQuantityKgs: 2240,
        countNetYieldPct: 64.0,
        yieldPct: 64.0,
        sampleYieldPct: 64.5,
        iceConsumption: '380 Kg',
        remarks: 'Black Tiger export grade batch.',
        species: 'Black Tiger Shrimp',
        inputHonWt: 3500,
        outputDhWt: 2240,
        recoveryPct: 64.0,
        wasteHeadWt: 1225,
        rejectionsWt: 35,
        lineNo: 'Table #3',
        operators: 28,
        status: 'IN_PROGRESS',
        startTime: '09:15',
        endTime: '—'
      },
      {
        sNo: 3,
        id: 'DH-2026-103',
        arrivalCode: 'LOT-2026-00127',
        lotNo: 'LOT-2026-00127',
        arrivalDate: '2026-10-06',
        productionPlant: 'DFL UNIT-4 (PND)',
        center: 'Machilipatnam Delta #3',
        deheadingStation: 'Table #4 & #5',
        deheadingDate: '06/10/2026',
        shift: 'Shift B (Evening)',
        supervisor: 'Ch. Prasad',
        checkingCount2: 52,
        hlCount: 34,
        honCount: 50,
        honQuantityKgs: 5000,
        hlQuantityKgs: 3275,
        countNetYieldPct: 65.5,
        yieldPct: 65.5,
        sampleYieldPct: 65.8,
        iceConsumption: '550 Kg',
        remarks: 'Fast processing, high recovery rate.',
        species: 'Vannamei Shrimp',
        inputHonWt: 5000,
        outputDhWt: 3275,
        recoveryPct: 65.5,
        wasteHeadWt: 1675,
        rejectionsWt: 50,
        lineNo: 'Table #4 & #5',
        operators: 44,
        status: 'IN_PROGRESS',
        startTime: '10:00',
        endTime: '—'
      },
      {
        sNo: 4,
        id: 'DH-2026-104',
        arrivalCode: 'LOT-2026-00128',
        lotNo: 'LOT-2026-00128',
        arrivalDate: '2026-10-06',
        productionPlant: 'DFL UNIT-1 (VSP)',
        center: 'Visakhapatnam Gate Dock',
        deheadingStation: 'Fish Line #1',
        deheadingDate: '06/10/2026',
        shift: 'Shift A (Day)',
        supervisor: 'Mallesh',
        checkingCount2: 12,
        hlCount: 8,
        honCount: 11,
        honQuantityKgs: 2800,
        hlQuantityKgs: 1428,
        countNetYieldPct: 51.0,
        yieldPct: 51.0,
        sampleYieldPct: 51.2,
        iceConsumption: '320 Kg',
        remarks: 'Asian Seabass manual line cutting.',
        species: 'Asian Seabass (Barramundi)',
        inputHonWt: 2800,
        outputDhWt: 1428,
        recoveryPct: 51.0,
        wasteHeadWt: 1316,
        rejectionsWt: 56,
        lineNo: 'Fish Line #1',
        operators: 22,
        status: 'COMPLETED',
        startTime: '07:30',
        endTime: '11:15'
      },
      {
        sNo: 5,
        id: 'DH-2026-105',
        arrivalCode: 'LOT-2026-00129',
        lotNo: 'LOT-2026-00129',
        arrivalDate: '2026-10-07',
        productionPlant: 'DFL UNIT-6 (JPT-II)',
        center: 'Amalapuram Harvesters #4',
        deheadingStation: 'Table #2',
        deheadingDate: '07/10/2026',
        shift: 'Shift B (Evening)',
        supervisor: 'D. Rambabu',
        checkingCount2: 48,
        hlCount: 30,
        honCount: 46,
        honQuantityKgs: 3800,
        hlQuantityKgs: 2508,
        countNetYieldPct: 66.0,
        yieldPct: 66.0,
        sampleYieldPct: 66.1,
        iceConsumption: '400 Kg',
        remarks: 'Scheduled evening batch processing.',
        species: 'Vannamei Shrimp',
        inputHonWt: 3800,
        outputDhWt: 2508,
        recoveryPct: 66.0,
        wasteHeadWt: 1254,
        rejectionsWt: 38,
        lineNo: 'Table #2',
        operators: 32,
        status: 'PENDING',
        startTime: '13:00',
        endTime: '—'
      },
      {
        sNo: 6,
        id: 'DH-2026-106',
        arrivalCode: 'LOT-2026-00130',
        lotNo: 'LOT-2026-00130',
        arrivalDate: '2026-10-07',
        productionPlant: 'DFL UNIT-2 (KKD)',
        center: 'Ongole Coastal Hub #1',
        deheadingStation: 'Table #1',
        deheadingDate: '07/10/2026',
        shift: 'Shift A (Day)',
        supervisor: 'G. Suribabu',
        checkingCount2: 38,
        hlCount: 24,
        honCount: 36,
        honQuantityKgs: 4600,
        hlQuantityKgs: 3036,
        countNetYieldPct: 66.0,
        yieldPct: 66.0,
        sampleYieldPct: 66.3,
        iceConsumption: '510 Kg',
        remarks: 'Standard grade yield achieved.',
        species: 'Vannamei Shrimp',
        inputHonWt: 4600,
        outputDhWt: 3036,
        recoveryPct: 66.0,
        wasteHeadWt: 1518,
        rejectionsWt: 46,
        lineNo: 'Table #1',
        operators: 35,
        status: 'COMPLETED',
        startTime: '08:00',
        endTime: '11:45'
      }
    ],

    gradingRuns: [
      {
        sNo: 1,
        id: 'GR-2026-201',
        arrivalDate: '2026-10-06',
        arrivalCode: 'LOT-2026-00125',
        lotNo: 'LOT-2026-00125',
        productionPlant: 'DFL UNIT-5 (JPT)',
        gradingStation: 'Grading Line #1',
        gradingDate: '06/10/2026',
        gradingMachine: 'Auto Grader #1',
        machineId: 'Auto Grader #1',
        startTime: '08:30',
        endTime: '12:15',
        breakTimeMinutes: 30,
        remarks: 'Calibrated for size uniformity',
        variety: 'Vannamei (VM)',
        species: 'Vannamei Shrimp',
        hlCountPerLb: '21/25 Count',
        hlWeightKgs: 2750,
        totalGradedKg: 2750,
        noOfCrates: 110,
        status: 'COMPLETED'
      },
      {
        sNo: 2,
        id: 'GR-2026-202',
        arrivalDate: '2026-10-06',
        arrivalCode: 'LOT-2026-00128',
        lotNo: 'LOT-2026-00128',
        productionPlant: 'DFL UNIT-1 (VSP)',
        gradingStation: 'Fish Sizing Table #1',
        gradingDate: '06/10/2026',
        gradingMachine: 'Manual Sizer #2',
        machineId: 'Manual Table #2',
        startTime: '09:00',
        endTime: '11:45',
        breakTimeMinutes: 15,
        remarks: 'Asian Seabass individual weight grading',
        variety: 'Asian Seabass',
        species: 'Asian Seabass',
        hlCountPerLb: '500-800 g/pc',
        hlWeightKgs: 1400,
        totalGradedKg: 1400,
        noOfCrates: 56,
        status: 'COMPLETED'
      },
      {
        sNo: 3,
        id: 'GR-2026-203',
        arrivalDate: '2026-10-06',
        arrivalCode: 'LOT-2026-00126',
        lotNo: 'LOT-2026-00126',
        productionPlant: 'DFL UNIT-3 (PSP)',
        gradingStation: 'Grading Line #2',
        gradingDate: '06/10/2026',
        gradingMachine: 'Auto Grader #2',
        machineId: 'Auto Grader #2',
        startTime: '10:00',
        endTime: '13:30',
        breakTimeMinutes: 30,
        remarks: 'Black Tiger export sizing run',
        variety: 'Black Tiger (BT)',
        species: 'Black Tiger',
        hlCountPerLb: '16/20 Count',
        hlWeightKgs: 2200,
        totalGradedKg: 2200,
        noOfCrates: 88,
        status: 'IN_PROGRESS'
      },
      {
        sNo: 4,
        id: 'GR-2026-204',
        arrivalDate: '2026-10-06',
        arrivalCode: 'LOT-2026-00127',
        lotNo: 'LOT-2026-00127',
        productionPlant: 'DFL UNIT-4 (PND)',
        gradingStation: 'Grading Line #1',
        gradingDate: '06/10/2026',
        gradingMachine: 'Auto Grader #1',
        machineId: 'Auto Grader #1',
        startTime: '13:00',
        endTime: '16:30',
        breakTimeMinutes: 20,
        remarks: 'High throughput optical scan pass',
        variety: 'Vannamei (VM)',
        species: 'Vannamei Shrimp',
        hlCountPerLb: '26/30 Count',
        hlWeightKgs: 3200,
        totalGradedKg: 3200,
        noOfCrates: 128,
        status: 'SCHEDULED'
      },
      {
        sNo: 5,
        id: 'GR-2026-205',
        arrivalDate: '2026-10-07',
        arrivalCode: 'LOT-2026-00129',
        lotNo: 'LOT-2026-00129',
        productionPlant: 'DFL UNIT-6 (JPT-II)',
        gradingStation: 'Grading Line #3',
        gradingDate: '07/10/2026',
        gradingMachine: 'Auto Grader #3',
        machineId: 'Auto Grader #3',
        startTime: '08:00',
        endTime: '11:30',
        breakTimeMinutes: 30,
        remarks: 'Optimal accuracy sensor pass',
        variety: 'Vannamei (VM)',
        species: 'Vannamei Shrimp',
        hlCountPerLb: '31/40 Count',
        hlWeightKgs: 2500,
        totalGradedKg: 2500,
        noOfCrates: 100,
        status: 'COMPLETED'
      }
    ],

    rmTrackIds: [
      {
        sNo: 1,
        id: 'TRK-RM-2026-801',
        trackId: 'TRK-RM-2026-801',
        productionPlant: 'DFL UNIT-5 (JPT)',
        arrivalDate: '2026-10-06',
        vehicleNumber: 'AP 16 TZ 3390',
        trackCodeFormat: 'TRK-RM-[YYYY]-[SEQ]',
        sealNumber: 'SL-884912',
        supervisor: 'Laxmi Narayana',
        remarks: 'Intake verified, seals intact, temperature optimal at -2°C',
        status: 'ACTIVE'
      },
      {
        sNo: 2,
        id: 'TRK-RM-2026-802',
        trackId: 'TRK-RM-2026-802',
        productionPlant: 'DFL UNIT-3 (PSP)',
        arrivalDate: '2026-10-06',
        vehicleNumber: 'AP 37 TT 1042',
        trackCodeFormat: 'TRK-RM-[YYYY]-[SEQ]',
        sealNumber: 'SL-884915',
        supervisor: 'K. Subba Rao',
        remarks: 'Black tiger shrimp lot, gate temperature check passed',
        status: 'ACTIVE'
      },
      {
        sNo: 3,
        id: 'TRK-RM-2026-803',
        trackId: 'TRK-RM-2026-803',
        productionPlant: 'DFL UNIT-4 (PND)',
        arrivalDate: '2026-10-06',
        vehicleNumber: 'AP 04 TX 8871',
        trackCodeFormat: 'TRK-RM-[YYYY]-[SEQ]',
        sealNumber: 'SL-884919',
        supervisor: 'Ch. Prasad',
        remarks: 'Direct pond harvest transport, rapid de-icing performed',
        status: 'ACTIVE'
      },
      {
        sNo: 4,
        id: 'TRK-RM-2026-804',
        trackId: 'TRK-RM-2026-804',
        productionPlant: 'DFL UNIT-1 (VSP)',
        arrivalDate: '2026-10-06',
        vehicleNumber: 'AP 31 TV 4402',
        trackCodeFormat: 'TRK-PLANT-[CODE]-[SEQ]',
        sealNumber: 'SL-884922',
        supervisor: 'Mallesh',
        remarks: 'Asian Seabass chilled crates, dock intake accepted',
        status: 'ACTIVE'
      },
      {
        sNo: 5,
        id: 'TRK-RM-2026-805',
        trackId: 'TRK-RM-2026-805',
        productionPlant: 'DFL UNIT-6 (JPT-II)',
        arrivalDate: '2026-10-07',
        vehicleNumber: 'AP 26 TV 6720',
        trackCodeFormat: 'TRK-RM-[YYYY]-[SEQ]',
        sealNumber: 'SL-884930',
        supervisor: 'D. Rambabu',
        remarks: 'Fresh dawn harvest batch, weighing dock cleared',
        status: 'ACTIVE'
      },
      {
        sNo: 6,
        id: 'TRK-RM-2026-806',
        trackId: 'TRK-RM-2026-806',
        productionPlant: 'DFL UNIT-2 (KKD)',
        arrivalDate: '2026-10-07',
        vehicleNumber: 'AP 05 TB 9914',
        trackCodeFormat: 'RFID-INTAKE-[BATCH]',
        sealNumber: 'SL-884935',
        supervisor: 'G. Suribabu',
        remarks: 'RFID crate tags scanned, transferred to staging chill room',
        status: 'ACTIVE'
      }
    ],

    deheadingTrackIds: [
      {
        sNo: 1,
        id: 'TRK-DH-2026-901',
        trackId: 'TRK-DH-2026-901',
        productionPlant: 'DFL UNIT-5 (JPT)',
        arrivalDate: '2026-10-06',
        deheadingDate: '2026-10-06',
        shift: 'Shift A (Day)',
        supervisor: 'Laxmi Narayana',
        remarks: 'Head-off yield verified, line table #1 and #2 cutting cleared',
        status: 'ACTIVE'
      },
      {
        sNo: 2,
        id: 'TRK-DH-2026-902',
        trackId: 'TRK-DH-2026-902',
        productionPlant: 'DFL UNIT-3 (PSP)',
        arrivalDate: '2026-10-06',
        deheadingDate: '2026-10-06',
        shift: 'Shift A (Day)',
        supervisor: 'K. Subba Rao',
        remarks: 'Black tiger shrimp high yield batch, zero physical damage',
        status: 'ACTIVE'
      },
      {
        sNo: 3,
        id: 'TRK-DH-2026-903',
        trackId: 'TRK-DH-2026-903',
        productionPlant: 'DFL UNIT-4 (PND)',
        arrivalDate: '2026-10-06',
        deheadingDate: '2026-10-06',
        shift: 'Shift B (Evening)',
        supervisor: 'Ch. Prasad',
        remarks: 'Rapid deheading pass completed, transferred to washing flume',
        status: 'ACTIVE'
      },
      {
        sNo: 4,
        id: 'TRK-DH-2026-904',
        trackId: 'TRK-DH-2026-904',
        productionPlant: 'DFL UNIT-1 (VSP)',
        arrivalDate: '2026-10-06',
        deheadingDate: '2026-10-06',
        shift: 'Shift A (Day)',
        supervisor: 'Mallesh',
        remarks: 'Asian Seabass manual line cutting, gills and gut inspected',
        status: 'ACTIVE'
      },
      {
        sNo: 5,
        id: 'TRK-DH-2026-905',
        trackId: 'TRK-DH-2026-905',
        productionPlant: 'DFL UNIT-6 (JPT-II)',
        arrivalDate: '2026-10-07',
        deheadingDate: '2026-10-07',
        shift: 'Shift B (Evening)',
        supervisor: 'D. Rambabu',
        remarks: 'Standard cut ratio verified, ice slurry chilling maintained',
        status: 'ACTIVE'
      },
      {
        sNo: 6,
        id: 'TRK-DH-2026-906',
        trackId: 'TRK-DH-2026-906',
        productionPlant: 'DFL UNIT-2 (KKD)',
        arrivalDate: '2026-10-07',
        deheadingDate: '2026-10-07',
        shift: 'Shift C (Night)',
        supervisor: 'G. Suribabu',
        remarks: 'Night shift processing, high recovery rate recorded',
        status: 'ACTIVE'
      }
    ],

    gradingTrackIds: [
      {
        sNo: 1,
        id: 'TRK-GR-2026-701',
        trackId: 'TRK-GR-2026-701',
        productionPlant: 'DFL UNIT-5 (JPT)',
        arrivalDate: '2026-10-06',
        receivingCount: '42 Count',
        gradingDate: '2026-10-06',
        gradingMachine: 'Auto Grader #1',
        startTime: '08:30',
        endTime: '12:00',
        breakTimeMinutes: 30,
        supervisor: 'Laxmi Narayana',
        remarks: 'Export grade batch calibrated to IQF specs, high uniformity.',
        variety: 'Vannamei (VM)',
        hlCount: '21/25',
        grade: 'Grade 1 (21/25)',
        treatment: 'Non-Phosphate',
        freezing: 'IQF Frozen',
        noOfCrates: 25,
        gradingQty: 500.0,
        hlTubWeight: 20.0,
        status: 'PASSED',
        crateItems: [
          { sNo: 1, variety: 'Vannamei (VM)', hlCount: '21/25', grade: 'Grade 1 (21/25)', treatment: 'Non-Phosphate', freezing: 'IQF Frozen', noOfCrates: 15, gradingQty: 300.0, hlTubWeight: 20.0 },
          { sNo: 2, variety: 'Vannamei (VM)', hlCount: '21/25', grade: 'Grade 2 (21/25)', treatment: 'Non-Phosphate', freezing: 'IQF Frozen', noOfCrates: 10, gradingQty: 200.0, hlTubWeight: 20.0 }
        ]
      },
      {
        sNo: 2,
        id: 'TRK-GR-2026-702',
        trackId: 'TRK-GR-2026-702',
        productionPlant: 'DFL UNIT-3 (PSP)',
        arrivalDate: '2026-10-06',
        receivingCount: '28 Count',
        gradingDate: '2026-10-06',
        gradingMachine: 'Auto Grader #2',
        startTime: '09:00',
        endTime: '13:30',
        breakTimeMinutes: 45,
        supervisor: 'K. Subba Rao',
        remarks: 'Premium export run, zero broken pieces observed.',
        variety: 'Black Tiger (BT)',
        hlCount: '16/20',
        grade: 'Grade A (16/20)',
        treatment: 'Fresh Raw',
        freezing: 'Block Frozen',
        noOfCrates: 30,
        gradingQty: 600.0,
        hlTubWeight: 20.0,
        status: 'PASSED',
        crateItems: [
          { sNo: 1, variety: 'Black Tiger (BT)', hlCount: '16/20', grade: 'Grade A (16/20)', treatment: 'Fresh Raw', freezing: 'Block Frozen', noOfCrates: 30, gradingQty: 600.0, hlTubWeight: 20.0 }
        ]
      },
      {
        sNo: 3,
        id: 'TRK-GR-2026-703',
        trackId: 'TRK-GR-2026-703',
        productionPlant: 'DFL UNIT-5 (JPT)',
        arrivalDate: '2026-10-06',
        receivingCount: '44 Count',
        gradingDate: '2026-10-06',
        gradingMachine: 'Auto Grader #1',
        startTime: '13:00',
        endTime: '16:45',
        breakTimeMinutes: 20,
        supervisor: 'Ch. Prasad',
        remarks: 'High optical precision sizing completed.',
        variety: 'Vannamei (VM)',
        hlCount: '26/30',
        grade: 'Grade 1 (26/30)',
        treatment: 'STPP Treated',
        freezing: 'IQF Frozen',
        noOfCrates: 40,
        gradingQty: 792.0,
        hlTubWeight: 19.8,
        status: 'PASSED',
        crateItems: [
          { sNo: 1, variety: 'Vannamei (VM)', hlCount: '26/30', grade: 'Grade 1 (26/30)', treatment: 'STPP Treated', freezing: 'IQF Frozen', noOfCrates: 40, gradingQty: 792.0, hlTubWeight: 19.8 }
        ]
      },
      {
        sNo: 4,
        id: 'TRK-GR-2026-704',
        trackId: 'TRK-GR-2026-704',
        productionPlant: 'DFL UNIT-4 (PND)',
        arrivalDate: '2026-10-05',
        receivingCount: '18 Count',
        gradingDate: '2026-10-06',
        gradingMachine: 'Auto Grader #3',
        startTime: '10:00',
        endTime: '14:00',
        breakTimeMinutes: 30,
        supervisor: 'Mallesh',
        remarks: 'Jumbo size grading for EU retail customer.',
        variety: 'Black Tiger (BT)',
        hlCount: '13/15',
        grade: 'Grade Premium (13/15)',
        treatment: 'Non-Phosphate',
        freezing: 'Semi-IQF',
        noOfCrates: 18,
        gradingQty: 369.0,
        hlTubWeight: 20.5,
        status: 'PASSED',
        crateItems: [
          { sNo: 1, variety: 'Black Tiger (BT)', hlCount: '13/15', grade: 'Grade Premium (13/15)', treatment: 'Non-Phosphate', freezing: 'Semi-IQF', noOfCrates: 18, gradingQty: 369.0, hlTubWeight: 20.5 }
        ]
      },
      {
        sNo: 5,
        id: 'TRK-GR-2026-705',
        trackId: 'TRK-GR-2026-705',
        productionPlant: 'DFL UNIT-1 (VSP)',
        arrivalDate: '2026-10-05',
        receivingCount: '55 Count',
        gradingDate: '2026-10-06',
        gradingMachine: 'Manual Sizer #2',
        startTime: '07:30',
        endTime: '11:30',
        breakTimeMinutes: 30,
        supervisor: 'D. Rambabu',
        remarks: 'Whole fish size sorting completed.',
        variety: 'Asian Seabass',
        hlCount: '300-500g',
        grade: 'Table Size (300-500g)',
        treatment: 'Chilled Salt Slurry',
        freezing: 'Blast Freezing',
        noOfCrates: 22,
        gradingQty: 550.0,
        hlTubWeight: 25.0,
        status: 'PASSED',
        crateItems: [
          { sNo: 1, variety: 'Asian Seabass', hlCount: '300-500g', grade: 'Table Size (300-500g)', treatment: 'Chilled Salt Slurry', freezing: 'Blast Freezing', noOfCrates: 22, gradingQty: 550.0, hlTubWeight: 25.0 }
        ]
      },
      {
        sNo: 6,
        id: 'TRK-GR-2026-706',
        trackId: 'TRK-GR-2026-706',
        productionPlant: 'DFL UNIT-6 (JPT-II)',
        arrivalDate: '2026-10-04',
        receivingCount: '48 Count',
        gradingDate: '2026-10-05',
        gradingMachine: 'Auto Grader #2',
        startTime: '14:00',
        endTime: '18:00',
        breakTimeMinutes: 25,
        supervisor: 'G. Suribabu',
        remarks: 'Standard export sizing batch.',
        variety: 'Vannamei (VM)',
        hlCount: '31/40',
        grade: 'Grade 2 (31/40)',
        treatment: 'Non-Phosphate',
        freezing: 'IQF Frozen',
        noOfCrates: 35,
        gradingQty: 700.0,
        hlTubWeight: 20.0,
        status: 'PASSED',
        crateItems: [
          { sNo: 1, variety: 'Vannamei (VM)', hlCount: '31/40', grade: 'Grade 2 (31/40)', treatment: 'Non-Phosphate', freezing: 'IQF Frozen', noOfCrates: 35, gradingQty: 700.0, hlTubWeight: 20.0 }
        ]
      }
    ],

    vaTrackIds: [
      {
        sNo: 1,
        id: 'TRK-VA-2026-601',
        trackId: 'TRK-VA-2026-601',
        productionPlant: 'DFL UNIT-5 (JPT)',
        arrivalDate: '2026-10-06',
        valueAdditionDate: '2026-10-07',
        shift: 'Shift A (Day)',
        supervisor: 'Laxmi Narayana',
        variety: 'Vannamei (VM)',
        hlCount: '21/25',
        crates: 45,
        hlWtKgs: 1000,
        vaOutQuantity: 870,
        totals: '87.0% (870 KG)',
        status: 'COMPLETED'
      },
      {
        sNo: 2,
        id: 'TRK-VA-2026-602',
        trackId: 'TRK-VA-2026-602',
        productionPlant: 'DFL UNIT-3 (PSP)',
        arrivalDate: '2026-10-06',
        valueAdditionDate: '2026-10-07',
        shift: 'Shift A (Day)',
        supervisor: 'Mallesh',
        variety: 'Black Tiger (BT)',
        hlCount: '16/20',
        crates: 55,
        hlWtKgs: 1200,
        vaOutQuantity: 1068,
        totals: '89.0% (1,068 KG)',
        status: 'COMPLETED'
      },
      {
        sNo: 3,
        id: 'TRK-VA-2026-603',
        trackId: 'TRK-VA-2026-603',
        productionPlant: 'DFL UNIT-5 (JPT)',
        arrivalDate: '2026-10-05',
        valueAdditionDate: '2026-10-06',
        shift: 'Shift B (Evening)',
        supervisor: 'D. Rambabu',
        variety: 'Vannamei (VM)',
        hlCount: '26/30',
        crates: 38,
        hlWtKgs: 850,
        vaOutQuantity: 782,
        totals: '92.0% (782 KG)',
        status: 'IN_PROGRESS'
      },
      {
        sNo: 4,
        id: 'TRK-VA-2026-604',
        trackId: 'TRK-VA-2026-604',
        productionPlant: 'DFL UNIT-4 (PND)',
        arrivalDate: '2026-10-05',
        valueAdditionDate: '2026-10-06',
        shift: 'Shift A (Day)',
        supervisor: 'K. Subba Rao',
        variety: 'Black Tiger (BT)',
        hlCount: '13/15',
        crates: 30,
        hlWtKgs: 650,
        vaOutQuantity: 611,
        totals: '94.0% (611 KG)',
        status: 'IN_PROGRESS'
      },
      {
        sNo: 5,
        id: 'TRK-VA-2026-605',
        trackId: 'TRK-VA-2026-605',
        productionPlant: 'DFL UNIT-1 (VSP)',
        arrivalDate: '2026-10-04',
        valueAdditionDate: '2026-10-05',
        shift: 'Shift C (Night)',
        supervisor: 'Ch. Prasad',
        variety: 'Asian Seabass',
        hlCount: '300-500g',
        crates: 25,
        hlWtKgs: 500,
        vaOutQuantity: 465,
        totals: '93.0% (465 KG)',
        status: 'COMPLETED'
      },
      {
        sNo: 6,
        id: 'TRK-VA-2026-606',
        trackId: 'TRK-VA-2026-606',
        productionPlant: 'DFL UNIT-6 (JPT-II)',
        arrivalDate: '2026-10-04',
        valueAdditionDate: '2026-10-05',
        shift: 'Shift B (Evening)',
        supervisor: 'G. Suribabu',
        variety: 'Vannamei (VM)',
        hlCount: '31/40',
        crates: 32,
        hlWtKgs: 700,
        vaOutQuantity: 651,
        totals: '93.0% (651 KG)',
        status: 'COMPLETED'
      }
    ],

    honTransfers: [
      {
        sNo: 1,
        id: 'TRK-TRF-2026-401',
        trackId: 'TRK-TRF-2026-401',
        productionPlant: 'DFL UNIT-5 (JPT)',
        transferPlant: 'DFL UNIT-3 (PSP)',
        arrivalDate: '2026-10-06',
        transferDate: '2026-10-07',
        arrivalCode: 'LOT-2026-00125',
        honCount: '42 Count',
        honWeight: 1200,
        weight: 1180,
        status: 'TRANSFERRED'
      },
      {
        sNo: 2,
        id: 'TRK-TRF-2026-402',
        trackId: 'TRK-TRF-2026-402',
        productionPlant: 'DFL UNIT-3 (PSP)',
        transferPlant: 'DFL UNIT-5 (JPT)',
        arrivalDate: '2026-10-06',
        transferDate: '2026-10-07',
        arrivalCode: 'LOT-2026-00126',
        honCount: '28 Count',
        honWeight: 950,
        weight: 935,
        status: 'TRANSFERRED'
      },
      {
        sNo: 3,
        id: 'TRK-TRF-2026-403',
        trackId: 'TRK-TRF-2026-403',
        productionPlant: 'DFL UNIT-5 (JPT)',
        transferPlant: 'DFL UNIT-4 (PND)',
        arrivalDate: '2026-10-05',
        transferDate: '2026-10-06',
        arrivalCode: 'LOT-2026-00127',
        honCount: '44 Count',
        honWeight: 1400,
        weight: 1375,
        status: 'IN_TRANSIT'
      },
      {
        sNo: 4,
        id: 'TRK-TRF-2026-404',
        trackId: 'TRK-TRF-2026-404',
        productionPlant: 'DFL UNIT-4 (PND)',
        transferPlant: 'DFL UNIT-1 (VSP)',
        arrivalDate: '2026-10-05',
        transferDate: '2026-10-06',
        arrivalCode: 'LOT-2026-00128',
        honCount: '18 Count',
        honWeight: 850,
        weight: 840,
        status: 'TRANSFERRED'
      },
      {
        sNo: 5,
        id: 'TRK-TRF-2026-405',
        trackId: 'TRK-TRF-2026-405',
        productionPlant: 'DFL UNIT-1 (VSP)',
        transferPlant: 'DFL UNIT-6 (JPT-II)',
        arrivalDate: '2026-10-04',
        transferDate: '2026-10-05',
        arrivalCode: 'LOT-2026-00129',
        honCount: '55 Count',
        honWeight: 1100,
        weight: 1085,
        status: 'TRANSFERRED'
      },
      {
        sNo: 6,
        id: 'TRK-TRF-2026-406',
        trackId: 'TRK-TRF-2026-406',
        productionPlant: 'DFL UNIT-6 (JPT-II)',
        transferPlant: 'DFL UNIT-2 (KKD)',
        arrivalDate: '2026-10-04',
        transferDate: '2026-10-05',
        arrivalCode: 'LOT-2026-00130',
        honCount: '35 Count',
        honWeight: 750,
        weight: 735,
        status: 'TRANSFERRED'
      }
    ],

    chemicalPos: [
      {
        sNo: 1,
        id: 'PO-CHM-2026-081',
        supplierName: 'Penta Chemicals Corp',
        poNo: 'PO-CHM-2026-081',
        poDate: '2026-10-02',
        chemicals: 'Sodium Tripolyphosphate (STPP)',
        portName: 'Visakhapatnam Port (VPT)',
        modeOfImport: 'Sea Freight (20FT FCL)',
        quantityBags: 200,
        quantityKgs: 5000,
        totalAmount: 925000,
        etdDate: '2026-10-04',
        etaDate: '2026-10-10',
        remarks: 'Customs clearance documents pre-cleared',
        year: '2026',
        status: 'APPROVED'
      },
      {
        sNo: 2,
        id: 'PO-CHM-2026-082',
        supplierName: 'Godavari BioTech Supplies',
        poNo: 'PO-CHM-2026-082',
        poDate: '2026-10-03',
        chemicals: 'Sodium Metabisulphite (SMS)',
        portName: 'Kakinada Deepwater Port',
        modeOfImport: 'Sea Freight (LCL)',
        quantityBags: 100,
        quantityKgs: 2500,
        totalAmount: 350000,
        etdDate: '2026-10-05',
        etaDate: '2026-10-12',
        remarks: 'Food grade certificate and COA attached',
        year: '2026',
        status: 'APPROVED'
      },
      {
        sNo: 3,
        id: 'PO-CHM-2026-083',
        supplierName: 'Delta Water Technologies',
        poNo: 'PO-CHM-2026-083',
        poDate: '2026-10-04',
        chemicals: 'Food-Grade Chlorine Powder',
        portName: 'Chennai Port',
        modeOfImport: 'Coastal Shipping',
        quantityBags: 60,
        quantityKgs: 1500,
        totalAmount: 142500,
        etdDate: '2026-10-06',
        etaDate: '2026-10-14',
        remarks: 'Disinfection high assay consignment',
        year: '2026',
        status: 'PENDING'
      },
      {
        sNo: 4,
        id: 'PO-CHM-2026-084',
        supplierName: 'AquaTech Solutions',
        poNo: 'PO-CHM-2026-084',
        poDate: '2026-10-05',
        chemicals: 'Non-Phosphate Moisture Retainer',
        portName: 'Visakhapatnam Port (VPT)',
        modeOfImport: 'Sea Freight (FCL)',
        quantityBags: 120,
        quantityKgs: 3000,
        totalAmount: 660000,
        etdDate: '2026-10-08',
        etaDate: '2026-10-15',
        remarks: 'Specialty Blend M-9 for EU export lots',
        year: '2026',
        status: 'APPROVED'
      },
      {
        sNo: 5,
        id: 'PO-CHM-2026-085',
        supplierName: 'Alpha Chemicals Ltd',
        poNo: 'PO-CHM-2026-085',
        poDate: '2026-10-06',
        chemicals: 'Citric Acid Anhydrous',
        portName: 'Krishnapatnam Port',
        modeOfImport: 'Sea Freight (LCL)',
        quantityBags: 40,
        quantityKgs: 1000,
        totalAmount: 165000,
        etdDate: '2026-10-09',
        etaDate: '2026-10-16',
        remarks: 'Acidity regulator batch import',
        year: '2026',
        status: 'IN_TRANSIT'
      }
    ],

    receivedChemicals: [
      {
        sNo: 1,
        id: 'RCV-CHM-2026-101',
        processingPlant: 'DFL UNIT-5 (JPT)',
        poNo: 'PO-CHM-2026-081',
        chemical: 'Sodium Tripolyphosphate (STPP)',
        blNo: 'MSCU-BL-981244',
        containerNo: 'MSCU-7489201',
        receivedBags: 200,
        receivedQuantity: 5000,
        billOfEntryNo: 'BOE-VPT-2026-8819',
        billOfEntryDate: '2026-10-04',
        clearedDate: '2026-10-06',
        balanceBags: 50,
        balanceQuantity: 1250,
        year: '2026',
        status: 'CLEARED'
      },
      {
        sNo: 2,
        id: 'RCV-CHM-2026-102',
        processingPlant: 'DFL UNIT-3 (PSP)',
        poNo: 'PO-CHM-2026-082',
        chemical: 'Sodium Metabisulphite (SMS)',
        blNo: 'MAEU-BL-771203',
        containerNo: 'MAEU-3398102',
        receivedBags: 100,
        receivedQuantity: 2500,
        billOfEntryNo: 'BOE-KAK-2026-4412',
        billOfEntryDate: '2026-10-05',
        clearedDate: '2026-10-07',
        balanceBags: 20,
        balanceQuantity: 500,
        year: '2026',
        status: 'CLEARED'
      },
      {
        sNo: 3,
        id: 'RCV-CHM-2026-103',
        processingPlant: 'DFL UNIT-5 (JPT)',
        poNo: 'PO-CHM-2026-083',
        chemical: 'Food-Grade Chlorine Powder',
        blNo: 'CMA-BL-449102',
        containerNo: 'CMAU-8821094',
        receivedBags: 60,
        receivedQuantity: 1500,
        billOfEntryNo: 'BOE-MAA-2026-3391',
        billOfEntryDate: '2026-10-06',
        clearedDate: '2026-10-08',
        balanceBags: 15,
        balanceQuantity: 375,
        year: '2026',
        status: 'CLEARED'
      },
      {
        sNo: 4,
        id: 'RCV-CHM-2026-104',
        processingPlant: 'DFL UNIT-4 (PND)',
        poNo: 'PO-CHM-2026-084',
        chemical: 'Non-Phosphate Moisture Retainer',
        blNo: 'HLCU-BL-330198',
        containerNo: 'HLXU-4401928',
        receivedBags: 120,
        receivedQuantity: 3000,
        billOfEntryNo: 'BOE-VPT-2026-9914',
        billOfEntryDate: '2026-10-07',
        clearedDate: '2026-10-09',
        balanceBags: 40,
        balanceQuantity: 1000,
        year: '2026',
        status: 'RECEIVED'
      },
      {
        sNo: 5,
        id: 'RCV-CHM-2026-105',
        processingPlant: 'DFL UNIT-1 (VSP)',
        poNo: 'PO-CHM-2026-085',
        chemical: 'Citric Acid Anhydrous',
        blNo: 'ONE-BL-552109',
        containerNo: 'TGHU-9921043',
        receivedBags: 40,
        receivedQuantity: 1000,
        billOfEntryNo: 'BOE-KRP-2026-2210',
        billOfEntryDate: '2026-10-08',
        clearedDate: '2026-10-10',
        balanceBags: 10,
        balanceQuantity: 250,
        year: '2026',
        status: 'CLEARED'
      }
    ],

    chemicalsConsumption: [
      {
        sNo: 1,
        id: 'CSM-2026-501',
        entryDate: '2026-10-06',
        chemicalName: 'Sodium Tripolyphosphate (STPP)',
        plantName: 'DFL UNIT-5 (JPT)',
        usageType: 'Moisture Retention Soaking',
        transferName: 'Soaking Tank Bay #2',
        consumedBags: 4,
        consumedQuantity: 100,
        status: 'CONSUMED'
      },
      {
        sNo: 2,
        id: 'CSM-2026-502',
        entryDate: '2026-10-06',
        chemicalName: 'Sodium Metabisulphite (SMS)',
        plantName: 'DFL UNIT-5 (JPT)',
        usageType: 'Freshness Dip Treatment',
        transferName: 'Dipping Tank Station #1',
        consumedBags: 2,
        consumedQuantity: 50,
        status: 'CONSUMED'
      },
      {
        sNo: 3,
        id: 'CSM-2026-503',
        entryDate: '2026-10-05',
        chemicalName: 'Food-Grade Chlorine Powder',
        plantName: 'DFL UNIT-3 (PSP)',
        usageType: 'Sanitation & Disinfection',
        transferName: 'Chlorine Wash Bath #3',
        consumedBags: 1,
        consumedQuantity: 25,
        status: 'CONSUMED'
      },
      {
        sNo: 4,
        id: 'CSM-2026-504',
        entryDate: '2026-10-05',
        chemicalName: 'Non-Phosphate Moisture Retainer',
        plantName: 'DFL UNIT-4 (PND)',
        usageType: 'Value Addition Batch',
        transferName: 'Value Addition Line #1',
        consumedBags: 3,
        consumedQuantity: 75,
        status: 'CONSUMED'
      },
      {
        sNo: 5,
        id: 'CSM-2026-505',
        entryDate: '2026-10-04',
        chemicalName: 'Citric Acid Anhydrous',
        plantName: 'DFL UNIT-1 (VSP)',
        usageType: 'pH Adjustment & Glaze',
        transferName: 'Finishing Bath Unit #1',
        consumedBags: 1,
        consumedQuantity: 25,
        status: 'CONSUMED'
      }
    ],

    chemicalOpeningBalance: [
      {
        sNo: 1,
        id: 'COB-2026-01',
        chemical: 'Sodium Tripolyphosphate (STPP)',
        plant: 'DFL UNIT-5 (JPT)',
        billDate: '2026-04-01',
        kgsPerBag: 25,
        totalBags: 60,
        totalKgs: 1500
      },
      {
        sNo: 2,
        id: 'COB-2026-02',
        chemical: 'Sodium Metabisulphite (SMS)',
        plant: 'DFL UNIT-3 (PSP)',
        billDate: '2026-04-01',
        kgsPerBag: 25,
        totalBags: 32,
        totalKgs: 800
      },
      {
        sNo: 3,
        id: 'COB-2026-03',
        chemical: 'Food-Grade Chlorine Powder',
        plant: 'DFL UNIT-5 (JPT)',
        billDate: '2026-04-02',
        kgsPerBag: 25,
        totalBags: 24,
        totalKgs: 600
      },
      {
        sNo: 4,
        id: 'COB-2026-04',
        chemical: 'Citric Acid Anhydrous',
        plant: 'DFL UNIT-1 (VSP)',
        billDate: '2026-04-02',
        kgsPerBag: 25,
        totalBags: 12,
        totalKgs: 300
      },
      {
        sNo: 5,
        id: 'COB-2026-05',
        chemical: 'Non-Phosphate Moisture Retainer',
        plant: 'DFL UNIT-4 (PND)',
        billDate: '2026-04-03',
        kgsPerBag: 25,
        totalBags: 48,
        totalKgs: 1200
      }
    ],

    chemicalPayments: [
      {
        sNo: 1,
        id: 'PAY-CHM-2026-041',
        paymentRef: 'PAY-CHM-2026-041',
        poNo: 'PO-CHM-2026-001',
        chemicalName: 'Sodium Tripolyphosphate (STPP)',
        partyName: 'Penta Chemicals Corp',
        supplier: 'Penta Chemicals Corp',
        productionPlant: 'DFL UNIT-5 (JPT)',
        invoiceRef: 'INV-PC-9912',
        receivedQtyKg: 5000,
        amount: 527250,
        paidAmount: 527250,
        bankRefNo: 'UTR-SBIN-261006129',
        transactionRef: 'UTR-SBIN-261006129',
        paymentDate: '2026-10-06',
        remarks: 'Full settlement against invoice INV-PC-9912',
        year: '2026',
        status: 'PAID'
      },
      {
        sNo: 2,
        id: 'PAY-CHM-2026-042',
        paymentRef: 'PAY-CHM-2026-042',
        poNo: 'PO-CHM-2026-002',
        chemicalName: 'Sodium Metabisulphite (SMS)',
        partyName: 'Godavari BioTech Supplies',
        supplier: 'Godavari BioTech Supplies',
        productionPlant: 'DFL UNIT-3 (PSP)',
        invoiceRef: 'INV-GB-4410',
        receivedQtyKg: 2000,
        amount: 203000,
        paidAmount: 203000,
        bankRefNo: 'UTR-HDFC-261006881',
        transactionRef: 'UTR-HDFC-261006881',
        paymentDate: '2026-10-06',
        remarks: 'Cleared via RTGS upon lab quality clearance',
        year: '2026',
        status: 'PAID'
      },
      {
        sNo: 3,
        id: 'PAY-CHM-2026-043',
        paymentRef: 'PAY-CHM-2026-043',
        poNo: 'PO-CHM-2026-003',
        chemicalName: 'Food-Grade Chlorine Powder',
        partyName: 'Delta Water Technologies',
        supplier: 'Delta Water Technologies',
        productionPlant: 'DFL UNIT-5 (JPT)',
        invoiceRef: 'INV-DW-8821',
        receivedQtyKg: 1500,
        amount: 87400,
        paidAmount: 87400,
        bankRefNo: 'CHQ-890214',
        transactionRef: 'CHQ-890214',
        paymentDate: '2026-10-05',
        remarks: 'Disbursed via bank cheque #890214',
        year: '2026',
        status: 'PAID'
      },
      {
        sNo: 4,
        id: 'PAY-CHM-2026-044',
        paymentRef: 'PAY-CHM-2026-044',
        poNo: 'PO-CHM-2026-004',
        chemicalName: 'Non-Phosphate Moisture Retainer',
        partyName: 'AquaTech Solutions',
        supplier: 'AquaTech Solutions',
        productionPlant: 'DFL UNIT-4 (PND)',
        invoiceRef: 'INV-AT-3310',
        receivedQtyKg: 3000,
        amount: 450000,
        paidAmount: 396000,
        bankRefNo: 'UTR-ICIC-261005712',
        transactionRef: 'UTR-ICIC-261005712',
        paymentDate: '2026-10-05',
        remarks: 'Partial payment settled; balance pending verification',
        year: '2026',
        status: 'PARTIAL'
      },
      {
        sNo: 5,
        id: 'PAY-CHM-2026-045',
        paymentRef: 'PAY-CHM-2026-045',
        poNo: 'PO-CHM-2026-005',
        chemicalName: 'Citric Acid Anhydrous',
        partyName: 'Alpha Chemicals Ltd',
        supplier: 'Alpha Chemicals Ltd',
        productionPlant: 'DFL UNIT-1 (VSP)',
        invoiceRef: 'INV-AC-1109',
        receivedQtyKg: 1000,
        amount: 62700,
        paidAmount: 62700,
        bankRefNo: 'UTR-AXIS-261004319',
        transactionRef: 'UTR-AXIS-261004319',
        paymentDate: '2026-10-04',
        remarks: 'Approved by QC & verified by finance',
        year: '2026',
        status: 'PAID'
      },
      {
        sNo: 6,
        id: 'PAY-CHM-2025-018',
        paymentRef: 'PAY-CHM-2025-018',
        poNo: 'PO-CHM-2025-088',
        chemicalName: 'Sodium Tripolyphosphate (STPP)',
        partyName: 'Penta Chemicals Corp',
        supplier: 'Penta Chemicals Corp',
        productionPlant: 'DFL UNIT-5 (JPT)',
        invoiceRef: 'INV-PC-7711',
        receivedQtyKg: 4000,
        amount: 418000,
        paidAmount: 418000,
        bankRefNo: 'UTR-SBIN-251120092',
        transactionRef: 'UTR-SBIN-251120092',
        paymentDate: '2025-11-20',
        remarks: 'Prior year procurement cleared',
        year: '2025',
        status: 'PAID'
      }
    ],

    chemicalStock: [
      { code: 'CHM-01', name: 'Sodium Tripolyphosphate (STPP)', grade: 'Food Grade E451', stockInHandKg: 2850, reorderLevelKg: 1000, safetyStockKg: 500, supplier: 'Penta Chemicals Corp', batchNo: 'STPP-26-891', expiryDate: '2027-08-31', status: 'OPTIMAL' },
      { code: 'CHM-02', name: 'Sodium Metabisulphite (SMS)', grade: 'Antioxidant Grade E223', stockInHandKg: 1450, reorderLevelKg: 600, safetyStockKg: 300, supplier: 'Godavari BioTech Supplies', batchNo: 'SMS-26-440', expiryDate: '2027-04-30', status: 'OPTIMAL' },
      { code: 'CHM-03', name: 'Food-Grade Chlorine Powder', grade: 'Disinfection High Assay', stockInHandKg: 920, reorderLevelKg: 500, safetyStockKg: 250, supplier: 'Delta Water Technologies', batchNo: 'CHL-26-112', expiryDate: '2026-12-31', status: 'OPTIMAL' },
      { code: 'CHM-04', name: 'Citric Acid Anhydrous', grade: 'Food Acidity Regulator', stockInHandKg: 380, reorderLevelKg: 400, safetyStockKg: 200, supplier: 'Alpha Chemicals Ltd', batchNo: 'CIT-26-095', expiryDate: '2027-11-30', status: 'REORDER_NOW' },
      { code: 'CHM-05', name: 'Non-Phosphate Moisture Retainer', grade: 'Specialty Blend (M-9)', stockInHandKg: 1800, reorderLevelKg: 800, safetyStockKg: 400, supplier: 'AquaTech Solutions', batchNo: 'NPR-26-551', expiryDate: '2027-09-30', status: 'OPTIMAL' }
    ],

    usageLogs: [
      { logId: 'CHM-USE-701', date: '2026-10-06', tankId: 'Dipping Tank #1', chemicalName: 'Sodium Metabisulphite', ppmLevel: '1.25%', durationMins: 15, treatedBatchId: 'LOT-2026-00125', treatedQtyKg: 4200, operator: 'M. Srinu', verifiedBy: 'QC Inspector S. Rao', result: 'COMPLIANT' },
      { logId: 'CHM-USE-702', date: '2026-10-06', tankId: 'Chlorine Wash Bath #3', chemicalName: 'Food-Grade Chlorine', ppmLevel: '5.0 PPM', durationMins: 5, treatedBatchId: 'DH-2026-101', treatedQtyKg: 2772, operator: 'K. Ramu', verifiedBy: 'QC Lead M. Nagesh', result: 'COMPLIANT' },
      { logId: 'CHM-USE-703', date: '2026-10-06', tankId: 'Soaking Tank #2', chemicalName: 'Non-Phosphate M-9', ppmLevel: '2.50%', durationMins: 45, treatedBatchId: 'VA-2026-301', treatedQtyKg: 1000, operator: 'D. Rambabu', verifiedBy: 'Shift Supervisor Ch. Prasad', result: 'COMPLIANT' },
      { logId: 'CHM-USE-704', date: '2026-10-06', tankId: 'Dipping Tank #2', chemicalName: 'Sodium Tripolyphosphate', ppmLevel: '2.00%', durationMins: 30, treatedBatchId: 'DH-2026-102', treatedQtyKg: 2240, operator: 'Laxmi Narayana', verifiedBy: 'QC Inspector S. Rao', result: 'COMPLIANT' }
    ]
  },

  render(containerId, subPage = 'overview', activeHash = '#/preprocessing/dashboard/overview') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const isDashboard = ['overview', 'floor-overview', 'operations-dashboard', 'chemical-screens-dashboard', 'chemical-dashboard', 'dashboard'].includes(subPage);

    container.innerHTML = `
      <div class="space-y-4">
        ${isDashboard ? '' : '<div id="preprocessing-tab-bar-container"></div>'}
        <div id="preprocessing-subpage-content"></div>
      </div>
    `;

    if (!isDashboard) {
      TabBar.render('preprocessing-tab-bar-container', activeHash);
    }
    const subContainer = document.getElementById('preprocessing-subpage-content');
    if (!subContainer) return;

    // Route to the appropriate screen
    switch (subPage) {
      // 1. Dashboard (Unified Operations & Chemical Screens Dashboard)
      case 'overview':
      case 'floor-overview':
      case 'operations-dashboard':
      case 'chemical-screens-dashboard':
      case 'chemical-dashboard':
      case 'dashboard':
        this.renderUnifiedDashboard(subContainer);
        break;

      // 2. Operations Submenu Tabs
      case 'deheading':
        this.renderDeheadingScreen(subContainer);
        break;
      case 'grading':
        this.renderGradingScreen(subContainer);
        break;
      case 'rm-received-trackid':
        this.renderRmReceivedTrackIdScreen(subContainer);
        break;
      case 'de-heading-trackid':
        this.renderDeheadingTrackIdScreen(subContainer);
        break;
      case 'grading-trackid':
        this.renderGradingTrackIdScreen(subContainer);
        break;
      case 'value-addition-trackid':
        this.renderValueAdditionTrackIdScreen(subContainer);
        break;
      case 'hon-qty-transfer-after-va':
        this.renderHonQtyTransferScreen(subContainer);
        break;

      // 3. Chemical Screens Submenu Tabs (7 Tabs)
      case 'chemical-pos':
        this.renderChemicalPosScreen(subContainer);
        break;
      case 'received-chemicals':
        this.renderReceivedChemicalsScreen(subContainer);
        break;
      case 'chemicals-consumption':
        this.renderChemicalsConsumptionScreen(subContainer);
        break;
      case 'chemical-received-report':
        this.renderChemicalReceivedReportScreen(subContainer);
        break;
      case 'chemical-opening-balance-report':
        this.renderChemicalOpeningBalanceReportScreen(subContainer);
        break;
      case 'chemical-balance-report':
        this.renderChemicalBalanceReportScreen(subContainer);
        break;
      case 'chemical-payments-list':
        this.renderChemicalPaymentsListScreen(subContainer);
        break;

      // Legacy aliases
      case 'chemical-stock':
        this.renderChemicalPosScreen(subContainer);
        break;
      case 'usage-logs':
        this.renderChemicalsConsumptionScreen(subContainer);
        break;

      default:
        this.renderDeheadingScreen(subContainer);
        break;
    }
  },

  // =========================================================================
  // UNIFIED PRE-PROCESSING DASHBOARD (OPERATIONS & CHEMICAL SCREENS COMBINED)
  // =========================================================================
  renderUnifiedDashboard(container) {
    // Operations metrics
    const totalInput = this.state.deheadingBatches.reduce((sum, b) => sum + (b.inputHonWt || 0), 0);
    const totalOutput = this.state.deheadingBatches.reduce((sum, b) => sum + (b.outputDhWt || 0), 0);
    const avgRecovery = totalInput > 0 ? ((totalOutput / totalInput) * 100).toFixed(1) : 0;
    const totalGraded = this.state.gradingRuns.reduce((sum, r) => sum + (r.totalGradedKg || 0), 0);

    // Chemical metrics
    const totalPOs = this.state.chemicalPOs ? this.state.chemicalPOs.length : 5;
    const totalPOAmount = this.state.chemicalPOs ? this.state.chemicalPOs.reduce((sum, p) => sum + (p.totalAmount || 0), 0) : 1685000;
    const totalConsumedKg = this.state.chemicalsConsumption ? this.state.chemicalsConsumption.reduce((sum, c) => sum + (Number(c.consumedQuantity) || 0), 0) : 2825;
    const totalConsumedBags = this.state.chemicalsConsumption ? this.state.chemicalsConsumption.reduce((sum, c) => sum + (Number(c.consumedBags) || 0), 0) : 113;
    const totalPaidAmount = this.state.chemicalPayments ? this.state.chemicalPayments.reduce((sum, p) => sum + (Number(p.paidAmount) || 0), 0) : 1685000;
    const totalStockOnHandKg = this.state.chemicalStock ? this.state.chemicalStock.reduce((sum, s) => sum + (s.stockInHandKg || 0), 0) : 7350;

    container.innerHTML = `
      <div class="space-y-4">
        <!-- Top Title Bar -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-0">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight mb-0">Pre-Processing Dashboard</h1>
          </div>
        </div>

        <!-- Executive Metrics KPI Grid (3 Operations + 3 Chemical Screens) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
          <!-- 1. Operations: Head-On Intake -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-3.5 shadow-2xs hover:shadow-xs transition-shadow">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Head-On Input</span>
              <span class="w-7 h-7 rounded-full bg-[#EBF8FF] text-[#0284C7] flex items-center justify-center">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
              </span>
            </div>
            <span class="text-lg font-extrabold text-[#172B4D] mt-1 block">${totalInput.toLocaleString()} KG</span>
            <span class="text-[10px] font-semibold text-[#00875A] block mt-0.5">Live floor intake</span>
          </div>

          <!-- 2. Operations: Deheading Yield -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-3.5 shadow-2xs hover:shadow-xs transition-shadow">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Deheaded Output</span>
              <span class="w-7 h-7 rounded-full bg-[#E3FCEF] text-[#00875A] flex items-center justify-center">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </span>
            </div>
            <span class="text-lg font-extrabold text-[#00875A] mt-1 block">${totalOutput.toLocaleString()} KG</span>
            <span class="text-[10px] font-semibold text-[#00A4B7] block mt-0.5">${avgRecovery}% Recovery yield</span>
          </div>

          <!-- 3. Operations: Graded Volume -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-3.5 shadow-2xs hover:shadow-xs transition-shadow">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Total Graded</span>
              <span class="w-7 h-7 rounded-full bg-[#E0F2FE] text-[#00A4B7] flex items-center justify-center">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"/></svg>
              </span>
            </div>
            <span class="text-lg font-extrabold text-[#172B4D] mt-1 block">${totalGraded.toLocaleString()} KG</span>
            <span class="text-[10px] font-semibold text-[#5E6C84] block mt-0.5">${this.state.gradingRuns.length} Runs completed</span>
          </div>

          <!-- 4. Chemical: Stock In Hand -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-3.5 shadow-2xs hover:shadow-xs transition-shadow">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Chemicals Stock</span>
              <span class="w-7 h-7 rounded-full bg-[#E3FCEF] text-[#00875A] flex items-center justify-center">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
              </span>
            </div>
            <span class="text-lg font-extrabold text-[#00875A] mt-1 block">${totalStockOnHandKg.toLocaleString()} KG</span>
            <span class="text-[10px] font-semibold text-[#00875A] block mt-0.5">5 Chemicals optimal</span>
          </div>

          <!-- 5. Chemical: Consumption -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-3.5 shadow-2xs hover:shadow-xs transition-shadow">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Chemicals Used</span>
              <span class="w-7 h-7 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </span>
            </div>
            <span class="text-lg font-extrabold text-[#172B4D] mt-1 block">${totalConsumedKg.toLocaleString()} KG</span>
            <span class="text-[10px] font-semibold text-[#D97706] block mt-0.5">${totalConsumedBags} Bags logged</span>
          </div>

          <!-- 6. Chemical: POs & Payments -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-3.5 shadow-2xs hover:shadow-xs transition-shadow">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Disbursements</span>
              <span class="w-7 h-7 rounded-full bg-[#F4F5F7] text-[#42526E] flex items-center justify-center">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
              </span>
            </div>
            <span class="text-lg font-extrabold text-[#172B4D] mt-1 block">₹${(totalPaidAmount).toLocaleString('en-IN')}</span>
            <span class="text-[10px] font-semibold text-[#00875A] block mt-0.5">${totalPOs} Active POs cleared</span>
          </div>
        </div>

        <!-- Dual Flow Section: Operations Flow (7 Stages) & Chemical Screens (7 Screens) -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <!-- Left: Operations Workflow Grid -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs">
            <div class="flex items-center justify-between pb-2 border-b border-[#F1F5F9] mb-3">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-[#0284C7]"></span>
                <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider mb-0">Floor Operations (7 Stages)</h3>
              </div>
              <a href="#/preprocessing/operations/deheading" class="text-[11px] font-bold text-[#0284C7] hover:underline">View All &rarr;</a>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <a href="#/preprocessing/operations/deheading" class="p-2.5 rounded-lg border border-[#E2E8F0] hover:border-[#0284C7] hover:bg-[#F0F9FF] transition-all group block">
                <span class="text-[10px] font-bold text-[#5E6C84] uppercase block">1. Deheading</span>
                <span class="text-xs font-extrabold text-[#172B4D] group-hover:text-[#0284C7] block mt-0.5">${this.state.deheadingBatches.length} Batches</span>
                <span class="text-[10px] text-[#00875A] font-semibold block">${avgRecovery}% Yield</span>
              </a>

              <a href="#/preprocessing/operations/grading" class="p-2.5 rounded-lg border border-[#E2E8F0] hover:border-[#0284C7] hover:bg-[#F0F9FF] transition-all group block">
                <span class="text-[10px] font-bold text-[#5E6C84] uppercase block">2. Grading</span>
                <span class="text-xs font-extrabold text-[#172B4D] group-hover:text-[#0284C7] block mt-0.5">${this.state.gradingRuns.length} Runs</span>
                <span class="text-[10px] text-[#00A4B7] font-semibold block">${totalGraded.toLocaleString()} KG</span>
              </a>

              <a href="#/preprocessing/operations/rm-received-trackid" class="p-2.5 rounded-lg border border-[#E2E8F0] hover:border-[#0284C7] hover:bg-[#F0F9FF] transition-all group block">
                <span class="text-[10px] font-bold text-[#5E6C84] uppercase block">3. RM TrackID</span>
                <span class="text-xs font-extrabold text-[#172B4D] group-hover:text-[#0284C7] block mt-0.5">${this.state.rmReceivedTrackIds ? this.state.rmReceivedTrackIds.length : 6} IDs</span>
                <span class="text-[10px] text-[#5E6C84] font-medium block">Lot verified</span>
              </a>

              <a href="#/preprocessing/operations/de-heading-trackid" class="p-2.5 rounded-lg border border-[#E2E8F0] hover:border-[#0284C7] hover:bg-[#F0F9FF] transition-all group block">
                <span class="text-[10px] font-bold text-[#5E6C84] uppercase block">4. DH TrackID</span>
                <span class="text-xs font-extrabold text-[#172B4D] group-hover:text-[#0284C7] block mt-0.5">${this.state.deheadingTrackIds ? this.state.deheadingTrackIds.length : 6} IDs</span>
                <span class="text-[10px] text-[#00875A] font-medium block">Yield mapped</span>
              </a>

              <a href="#/preprocessing/operations/grading-trackid" class="p-2.5 rounded-lg border border-[#E2E8F0] hover:border-[#0284C7] hover:bg-[#F0F9FF] transition-all group block">
                <span class="text-[10px] font-bold text-[#5E6C84] uppercase block">5. Grade TrackID</span>
                <span class="text-xs font-extrabold text-[#172B4D] group-hover:text-[#0284C7] block mt-0.5">${this.state.gradingTrackIds ? this.state.gradingTrackIds.length : 6} IDs</span>
                <span class="text-[10px] text-[#00A4B7] font-medium block">Categorized</span>
              </a>

              <a href="#/preprocessing/operations/value-addition-trackid" class="p-2.5 rounded-lg border border-[#E2E8F0] hover:border-[#0284C7] hover:bg-[#F0F9FF] transition-all group block">
                <span class="text-[10px] font-bold text-[#5E6C84] uppercase block">6. VA TrackID</span>
                <span class="text-xs font-extrabold text-[#172B4D] group-hover:text-[#0284C7] block mt-0.5">${this.state.valueAdditionTrackIds ? this.state.valueAdditionTrackIds.length : 5} Batches</span>
                <span class="text-[10px] text-[#5E6C84] font-medium block">Soaking / Dipping</span>
              </a>

              <a href="#/preprocessing/operations/hon-qty-transfer-after-va" class="p-2.5 rounded-lg border border-[#E2E8F0] hover:border-[#0284C7] hover:bg-[#F0F9FF] transition-all group col-span-2 sm:col-span-2 block">
                <span class="text-[10px] font-bold text-[#5E6C84] uppercase block">7. HON Qty Transfer After VA</span>
                <span class="text-xs font-extrabold text-[#172B4D] group-hover:text-[#0284C7] block mt-0.5">${this.state.honQtyTransfers ? this.state.honQtyTransfers.length : 4} Transfer Logs</span>
                <span class="text-[10px] text-[#00875A] font-semibold block">Transferred to Freezing Tunnels</span>
              </a>
            </div>
          </div>

          <!-- Right: Chemical Screens Grid -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs">
            <div class="flex items-center justify-between pb-2 border-b border-[#F1F5F9] mb-3">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-[#00875A]"></span>
                <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider mb-0">Chemical Screens (7 Modules)</h3>
              </div>
              <a href="#/preprocessing/chemical-screens/chemical-pos" class="text-[11px] font-bold text-[#00875A] hover:underline">View All &rarr;</a>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <a href="#/preprocessing/chemical-screens/chemical-pos" class="p-2.5 rounded-lg border border-[#E2E8F0] hover:border-[#00875A] hover:bg-[#F0FDF4] transition-all group block">
                <span class="text-[10px] font-bold text-[#5E6C84] uppercase block">1. POs</span>
                <span class="text-xs font-extrabold text-[#172B4D] group-hover:text-[#00875A] block mt-0.5">${totalPOs} Active POs</span>
                <span class="text-[10px] text-[#0284C7] font-semibold block">Import Orders</span>
              </a>

              <a href="#/preprocessing/chemical-screens/received-chemicals" class="p-2.5 rounded-lg border border-[#E2E8F0] hover:border-[#00875A] hover:bg-[#F0FDF4] transition-all group block">
                <span class="text-[10px] font-bold text-[#5E6C84] uppercase block">2. Received</span>
                <span class="text-xs font-extrabold text-[#172B4D] group-hover:text-[#00875A] block mt-0.5">Receipts</span>
                <span class="text-[10px] text-[#00875A] font-semibold block">BL &amp; BOE Clear</span>
              </a>

              <a href="#/preprocessing/chemical-screens/chemicals-consumption" class="p-2.5 rounded-lg border border-[#E2E8F0] hover:border-[#00875A] hover:bg-[#F0FDF4] transition-all group block">
                <span class="text-[10px] font-bold text-[#5E6C84] uppercase block">3. Usage</span>
                <span class="text-xs font-extrabold text-[#172B4D] group-hover:text-[#00875A] block mt-0.5">Consumption</span>
                <span class="text-[10px] text-[#00A4B7] font-semibold block">${totalConsumedKg.toLocaleString()} KG used</span>
              </a>

              <a href="#/preprocessing/chemical-screens/chemical-received-report" class="p-2.5 rounded-lg border border-[#E2E8F0] hover:border-[#00875A] hover:bg-[#F0FDF4] transition-all group block">
                <span class="text-[10px] font-bold text-[#5E6C84] uppercase block">4. Received Rep</span>
                <span class="text-xs font-extrabold text-[#172B4D] group-hover:text-[#00875A] block mt-0.5">Receipts Rep</span>
                <span class="text-[10px] text-[#5E6C84] font-medium block">Annual Summary</span>
              </a>

              <a href="#/preprocessing/chemical-screens/chemical-opening-balance-report" class="p-2.5 rounded-lg border border-[#E2E8F0] hover:border-[#00875A] hover:bg-[#F0FDF4] transition-all group block">
                <span class="text-[10px] font-bold text-[#5E6C84] uppercase block">5. Opening Rep</span>
                <span class="text-xs font-extrabold text-[#172B4D] group-hover:text-[#00875A] block mt-0.5">Opening Bal</span>
                <span class="text-[10px] text-[#5E6C84] font-medium block">Audit Baselines</span>
              </a>

              <a href="#/preprocessing/chemical-screens/chemical-balance-report" class="p-2.5 rounded-lg border border-[#E2E8F0] hover:border-[#00875A] hover:bg-[#F0FDF4] transition-all group block">
                <span class="text-[10px] font-bold text-[#5E6C84] uppercase block">6. Balance Rep</span>
                <span class="text-xs font-extrabold text-[#172B4D] group-hover:text-[#00875A] block mt-0.5">Balance Rep</span>
                <span class="text-[10px] text-[#00875A] font-semibold block">Monthly Closing</span>
              </a>

              <a href="#/preprocessing/chemical-screens/chemical-payments-list" class="p-2.5 rounded-lg border border-[#E2E8F0] hover:border-[#00875A] hover:bg-[#F0FDF4] transition-all group col-span-2 sm:col-span-2 block">
                <span class="text-[10px] font-bold text-[#5E6C84] uppercase block">7. Payments List</span>
                <span class="text-xs font-extrabold text-[#172B4D] group-hover:text-[#00875A] block mt-0.5">Disbursements &amp; UTRs</span>
                <span class="text-[10px] text-[#00875A] font-semibold block">₹${totalPaidAmount.toLocaleString('en-IN')} Settled</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Integrated Live Data Tables Section with Interactive Switcher -->
        <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs">
          <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-[#00A4B7]"></span>
              <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider mb-0">Live Operational Registers</h3>
            </div>
            <!-- Toggle Tabs for Operations vs Chemicals -->
            <div class="inline-flex items-center p-1 bg-[#F4F5F7] rounded-lg border border-[#DFE1E6]" id="dash-table-switcher">
              <button type="button" id="btn-tab-ops" class="px-3.5 py-1 text-xs font-bold rounded-md transition-all cursor-pointer border-0 bg-white text-[#0284C7] shadow-xs">
                <span>Floor Production Batches</span>
              </button>
              <button type="button" id="btn-tab-chem" class="px-3.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer border-0 text-[#5E6C84] hover:text-[#172B4D] bg-transparent">
                <span>Chemical Inventory &amp; Stock</span>
              </button>
            </div>
          </div>

          <!-- Table Container 1: Floor Batches -->
          <div id="unified-ops-table-container"></div>

          <!-- Table Container 2: Chemical Inventory (hidden by default) -->
          <div id="unified-chem-table-container" class="hidden"></div>
        </div>
      </div>
    `;

    // Render Table 1: Floor Operations Batches
    const renderOpsTable = () => {
      new DataTable({
        containerId: 'unified-ops-table-container',
        data: this.state.deheadingBatches,
        keyField: 'id',
        tableTitle: 'Pre-Processing Floor Batches & Operations Register',
        searchable: true,
        exportable: true,
        pageSize: 10,
        columns: [
          { field: 'id', header: 'Batch ID', render: (v) => `<span class="font-bold text-[#00A4B7] font-mono">${v}</span>` },
          { field: 'lotNo', header: 'Lot Number', render: (v) => `<span class="font-bold text-[#172B4D] font-mono">${v}</span>` },
          { field: 'species', header: 'Species / Variety', render: (v) => `<span class="text-[#334155] font-medium whitespace-nowrap">${v}</span>` },
          { field: 'lineNo', header: 'Floor Line / Table', render: (v) => `<span class="text-[#42526E] font-semibold whitespace-nowrap">${v}</span>` },
          { field: 'inputHonWt', header: 'Input HON (KG)', render: (v) => `<span class="font-bold text-[#172B4D] whitespace-nowrap">${Number(v).toLocaleString()} KG</span>` },
          { field: 'outputDhWt', header: 'Output DH (KG)', render: (v) => `<span class="font-bold text-[#00875A] whitespace-nowrap">${Number(v).toLocaleString()} KG</span>` },
          { field: 'recoveryPct', header: 'Recovery %', render: (v) => `<span class="px-2 py-0.5 rounded text-xs font-bold ${v >= 65 ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#FFF0B3] text-[#172B4D]'} whitespace-nowrap">${v}%</span>` },
          { field: 'supervisor', header: 'Floor Supervisor', render: (v) => `<span class="text-[#5E6C84] whitespace-nowrap">${v}</span>` },
          { field: 'status', header: 'Status', render: (v) => `<span class="lozenge ${v === 'COMPLETED' ? 'lozenge-success' : v === 'IN_PROGRESS' ? 'lozenge-primary' : 'lozenge-default'} whitespace-nowrap">${v}</span>` }
        ],
        actions: [
          {
            label: 'Print Batch Sheet',
            icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Print Batch Sheet',
                message: `Are you sure you want to generate and print the batch sheet for <strong class="text-[#00A4B7]">${row.id}</strong> (${row.lotNo})?`,
                confirmText: 'Print Sheet',
                cancelText: 'Cancel',
                isDestructive: false,
                onConfirm: () => Toast.show(`Printing Batch Sheet for ${row.id}`, 'success')
              });
            }
          }
        ],
        onRowClick: (row) => Toast.show(`Batch ${row.id}: Input ${row.inputHonWt} KG &bull; Recovery ${row.recoveryPct}%`, 'info')
      });
    };

    // Render Table 2: Chemical Stock Overview
    const renderChemTable = () => {
      new DataTable({
        containerId: 'unified-chem-table-container',
        data: this.state.chemicalStock,
        keyField: 'code',
        tableTitle: 'Chemical Inventory Stock & Safety Status Overview',
        searchable: true,
        exportable: true,
        pageSize: 10,
        columns: [
          { field: 'code', header: 'Code', render: (v) => `<span class="font-mono font-bold text-[#00A4B7] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BAE6FD] whitespace-nowrap">${v}</span>` },
          { field: 'name', header: 'Chemical Name', render: (v) => `<span class="font-bold text-[#172B4D] whitespace-nowrap">${v}</span>` },
          { field: 'grade', header: 'Grade / Specification', render: (v) => `<span class="text-[#5E6C84] whitespace-nowrap">${v}</span>` },
          { field: 'stockInHandKg', header: 'Stock In Hand', render: (v) => `<span class="font-extrabold text-[#00875A] whitespace-nowrap">${Number(v).toLocaleString()} KG</span>` },
          { field: 'reorderLevelKg', header: 'Reorder Level', render: (v) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${Number(v).toLocaleString()} KG</span>` },
          { field: 'safetyStockKg', header: 'Safety Stock', render: (v) => `<span class="text-[#5E6C84] whitespace-nowrap">${Number(v).toLocaleString()} KG</span>` },
          { field: 'supplier', header: 'Primary Supplier', render: (v) => `<span class="text-[#172B4D] font-medium whitespace-nowrap">${v}</span>` },
          { field: 'expiryDate', header: 'Expiry Date', render: (v) => `<span class="text-[#5E6C84] whitespace-nowrap">${v}</span>` },
          {
            field: 'status',
            header: 'Status',
            render: (v) => {
              const badgeClass = v === 'OPTIMAL' ? 'lozenge-success' : 'lozenge-danger';
              return `<span class="lozenge ${badgeClass} whitespace-nowrap">${v === 'OPTIMAL' ? 'OPTIMAL' : 'REORDER NOW'}</span>`;
            }
          }
        ],
        actions: [
          {
            label: 'View Consumption',
            icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`,
            onClick: () => { window.location.hash = '#/preprocessing/chemical-screens/chemicals-consumption'; }
          }
        ],
        onRowClick: (row) => Toast.show(`${row.name}: In Hand ${row.stockInHandKg} KG &bull; Supplier: ${row.supplier}`, 'info')
      });
    };

    renderOpsTable();

    let chemTableRendered = false;

    // Switcher event listeners
    const btnOps = document.getElementById('btn-tab-ops');
    const btnChem = document.getElementById('btn-tab-chem');
    const wrapOps = document.getElementById('unified-ops-table-container');
    const wrapChem = document.getElementById('unified-chem-table-container');

    btnOps?.addEventListener('click', () => {
      btnOps.className = 'px-3.5 py-1 text-xs font-bold rounded-md transition-all cursor-pointer border-0 bg-white text-[#0284C7] shadow-xs';
      btnChem.className = 'px-3.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer border-0 text-[#5E6C84] hover:text-[#172B4D] bg-transparent';
      wrapOps?.classList.remove('hidden');
      wrapChem?.classList.add('hidden');
    });

    btnChem?.addEventListener('click', () => {
      btnChem.className = 'px-3.5 py-1 text-xs font-bold rounded-md transition-all cursor-pointer border-0 bg-white text-[#00875A] shadow-xs';
      btnOps.className = 'px-3.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer border-0 text-[#5E6C84] hover:text-[#172B4D] bg-transparent';
      wrapChem?.classList.remove('hidden');
      wrapOps?.classList.add('hidden');

      if (!chemTableRendered) {
        renderChemTable();
        chemTableRendered = true;
      }
    });
  },

  // Backward compatibility alias methods
  renderOperationsDashboard(container) {
    this.renderUnifiedDashboard(container);
  },

  renderChemicalScreensDashboard(container) {
    this.renderUnifiedDashboard(container);
  },

  renderFloorOverview(container) {
    this.renderUnifiedDashboard(container);
  },
  // =========================================================================
  // SCREEN 2: DEHEADING (OPERATIONS TAB 1)
  // =========================================================================
  renderDeheadingScreen(container) {
    container.innerHTML = `
      <div class="space-y-4">
        <!-- Top Action Bar (No Subheading) -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-0">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">Deheading</h1>
          </div>
          <div>
            <button type="button" id="btn-new-dehead-batch" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer border-0">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Add Deheading</span>
            </button>
          </div>
        </div>

        <!-- Filter Card: Exact User Application UI Style -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>

            <!-- Filter Controls: Reset & Toggle Open/Close -->
            <div class="inline-flex items-center" style="gap: 8px; display: inline-flex;">
              <button type="button" id="deheading-top-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-7 h-7 min-w-[28px] min-h-[28px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-none transition-colors cursor-pointer select-none" style="width: 28px; height: 28px; min-width: 28px; min-height: 28px; border-radius: 0; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Reset all filters" aria-label="Reset all filters">
                <svg class="w-4 h-4 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>

              <button type="button" id="deheading-top-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-7 h-7 min-w-[28px] min-h-[28px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-none transition-colors cursor-pointer select-none" style="width: 28px; height: 28px; min-width: 28px; min-height: 28px; border-radius: 0; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Hide Filter" aria-label="Hide Filter">
                <svg class="w-4 h-4 text-current dt-top-filter-toggle-icon transform transition-transform duration-200" id="deheading-top-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <!-- Collapsible Filter Inputs Grid (Streamlined ERP Search Fields) -->
          <div id="deheading-top-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
            <!-- 1. ARRIVAL/LOT CODE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL / LOT CODE</label>
              <select id="dh-filter-lot-code" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">All Arrival / Lot Codes</option>
                <option value="LOT-2026-00125">LOT-2026-00125</option>
                <option value="LOT-2026-00126">LOT-2026-00126</option>
                <option value="LOT-2026-00127">LOT-2026-00127</option>
                <option value="LOT-2026-00128">LOT-2026-00128</option>
                <option value="LOT-2026-00129">LOT-2026-00129</option>
                <option value="LOT-2026-00130">LOT-2026-00130</option>
              </select>
            </div>

            <!-- 2. PRODUCTION PLANT -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT</label>
              <select id="dh-filter-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">All Production Plants</option>
                <option value="DFL UNIT-5 (JPT)">DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-6 (JPT-II)">DFL UNIT-6 (JPT-II)</option>
                <option value="DFL UNIT-2 (KKD)">DFL UNIT-2 (KKD)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
              </select>
            </div>

            <!-- 3. DE HEADING STATION -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">DE HEADING STATION</label>
              <select id="dh-filter-station" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Stations</option>
                <option value="Table #1 & #2">Table #1 & #2</option>
                <option value="Table #3">Table #3</option>
                <option value="Table #4 & #5">Table #4 & #5</option>
                <option value="Fish Line #1">Fish Line #1</option>
                <option value="Table #2">Table #2</option>
                <option value="Table #1">Table #1</option>
              </select>
            </div>

            <!-- 4. DE HEADING DATE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">DE HEADING DATE</label>
              <div class="erp-date-wrapper">
                <input type="date" id="dh-filter-dehead-date" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 5. SELECT SHIFT -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SELECT SHIFT</label>
              <select id="dh-filter-shift" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Shifts</option>
                <option value="Shift A (Day)">Shift A (Day)</option>
                <option value="Shift B (Evening)">Shift B (Evening)</option>
                <option value="Shift C (Night)">Shift C (Night)</option>
              </select>
            </div>

            <!-- 6. SUPERVISOR -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SUPERVISOR</label>
              <select id="dh-filter-supervisor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Supervisors</option>
                <option value="Laxmi Narayana">Laxmi Narayana</option>
                <option value="K. Subba Rao">K. Subba Rao</option>
                <option value="Ch. Prasad">Ch. Prasad</option>
                <option value="Mallesh">Mallesh</option>
                <option value="D. Rambabu">D. Rambabu</option>
                <option value="G. Suribabu">G. Suribabu</option>
              </select>
            </div>

            <!-- 7. ARRIVAL DATE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL DATE</label>
              <div class="erp-date-wrapper">
                <input type="date" id="dh-filter-arrival-date" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 8. Search Button Slot -->
            <div class="flex items-end">
              <button type="button" id="dh-filter-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Data Table Container -->
        <div id="deheading-table-container"></div>
      </div>
    `;

    document.getElementById('btn-new-dehead-batch')?.addEventListener('click', () => this.showNewDeheadingModal(container));

    // Toggle filter open/close handler
    const toggleBtn = document.getElementById('deheading-top-toggle-btn');
    toggleBtn?.addEventListener('click', () => {
      const body = document.getElementById('deheading-top-filter-body');
      const icon = document.getElementById('deheading-top-toggle-icon');
      if (body) {
        body.classList.toggle('hidden');
        if (body.classList.contains('hidden')) {
          toggleBtn.title = 'Show Filter';
          icon?.classList.add('-rotate-90');
        } else {
          toggleBtn.title = 'Hide Filter';
          icon?.classList.remove('-rotate-90');
        }
      }
    });

    // Reset filter handler
    const resetBtn = document.getElementById('deheading-top-reset-btn');
    resetBtn?.addEventListener('click', () => {
      if (document.getElementById('dh-filter-arrival-date')) document.getElementById('dh-filter-arrival-date').value = '';
      if (document.getElementById('dh-filter-lot-code')) document.getElementById('dh-filter-lot-code').value = 'ALL';
      if (document.getElementById('dh-filter-plant')) document.getElementById('dh-filter-plant').value = 'ALL';
      if (document.getElementById('dh-filter-station')) document.getElementById('dh-filter-station').value = 'ALL';
      if (document.getElementById('dh-filter-dehead-date')) document.getElementById('dh-filter-dehead-date').value = '';
      if (document.getElementById('dh-filter-shift')) document.getElementById('dh-filter-shift').value = 'ALL';
      if (document.getElementById('dh-filter-supervisor')) document.getElementById('dh-filter-supervisor').value = 'ALL';

      renderTable(this.state.deheadingBatches);
      Toast.show('Filters reset', 'info');
    });

    // Initialize the DataTable with the 17 requested columns
    const renderTable = (data) => {
      new DataTable({
        containerId: 'deheading-table-container',
        data: data,
        keyField: 'id',
        tableTitle: 'Deheading Records & Batch Output',
        searchable: true,
        exportable: true,
        pageSize: 10,
        columns: [
          // 1. S.No
          {
            field: 'sNo',
            header: 'S.No',
            render: (v, row, idx) => `<span class="text-[#5E6C84] font-semibold">${v || (idx + 1)}</span>`
          },
          // 2. Arrival Code
          {
            field: 'arrivalCode',
            header: 'Arrival Code',
            render: (v) => `<span class="font-bold text-[#00A4B7]">${v}</span>`
          },
          // 3. Production Plant
          {
            field: 'productionPlant',
            header: 'Production Plant',
            render: (v) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 4. Center
          {
            field: 'center',
            header: 'Center',
            render: (v) => `<span class="text-[#42526E] whitespace-nowrap">${v}</span>`
          },
          // 5. De Heading Date
          {
            field: 'deheadingDate',
            header: 'De Heading Date',
            render: (v) => `<span class="text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 6. Shift
          {
            field: 'shift',
            header: 'Shift',
            render: (v) => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F4F5F7] text-[#42526E] border border-[#DFE1E6] whitespace-nowrap">${v}</span>`
          },
          // 7. SuperVisor
          {
            field: 'supervisor',
            header: 'SuperVisor',
            render: (v) => `<span class="font-medium text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 8. Checking Count-2
          {
            field: 'checkingCount2',
            header: 'Checking Count-2',
            render: (v) => `<span class="font-mono text-xs font-bold text-[#172B4D]">${v}</span>`
          },
          // 9. HL Count
          {
            field: 'hlCount',
            header: 'HL Count',
            render: (v) => `<span class="font-mono text-xs font-bold text-[#0284C7]">${v}</span>`
          },
          // 10. HON Count
          {
            field: 'honCount',
            header: 'HON Count',
            render: (v) => `<span class="font-mono text-xs font-semibold text-[#42526E]">${v}</span>`
          },
          // 11. HON Quantity(Kgs)
          {
            field: 'honQuantityKgs',
            header: 'HON Quantity(Kgs)',
            render: (v) => `<span class="font-bold text-[#172B4D] whitespace-nowrap">${Number(v).toLocaleString()} Kg</span>`
          },
          // 12. HL Quantity(Kgs)
          {
            field: 'hlQuantityKgs',
            header: 'HL Quantity(Kgs)',
            render: (v) => `<span class="font-bold text-[#00875A] whitespace-nowrap">${Number(v).toLocaleString()} Kg</span>`
          },
          // 13. Count Net Yield(%)
          {
            field: 'countNetYieldPct',
            header: 'Count Net Yield(%)',
            render: (v) => `<span class="font-bold text-[#00A4B7]">${v}%</span>`
          },
          // 14. Yield(%)
          {
            field: 'yieldPct',
            header: 'Yield(%)',
            render: (v) => `<span class="px-2 py-0.5 rounded text-xs font-bold ${v >= 65 ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#FFF0B3] text-[#172B4D]'}">${v}%</span>`
          },
          // 15. Ice Consumption
          {
            field: 'iceConsumption',
            header: 'Ice Consumption',
            render: (v) => `<span class="text-[#5E6C84] font-medium whitespace-nowrap">${v}</span>`
          },
          // 16. Remarks
          {
            field: 'remarks',
            header: 'Remarks',
            render: (v) => `<span class="text-xs text-[#5E6C84] truncate max-w-[160px] block" title="${v}">${v}</span>`
          }
          // 17. Actions is automatically appended and center-aligned by DataTable
        ],
        actions: [
          {
            label: 'Edit',
            icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: (row) => this.showEditDeheadingModal(row, container)
          },
          {
            label: 'Delete',
            icon: `<svg class="w-4 h-4 text-[#FF5630]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Delete Deheading Record',
                message: `Are you sure you want to delete the deheading record for <strong class="text-[#00A4B7]">${row.arrivalCode}</strong> (${row.id})? This action cannot be undone.`,
                confirmText: 'Yes, Delete',
                cancelText: 'Cancel',
                isDestructive: true,
                onConfirm: () => {
                  const idx = this.state.deheadingBatches.findIndex(b => b.id === row.id);
                  if (idx !== -1) {
                    this.state.deheadingBatches.splice(idx, 1);
                    renderTable(this.state.deheadingBatches);
                    Toast.show(`Deheading record ${row.arrivalCode} deleted`, 'info');
                  }
                }
              });
            }
          }
        ],
        onRowClick: (row) => this.showBatchDetailsModal(row)
      });
    };

    renderTable(this.state.deheadingBatches);

    // Search button event binding
    const searchBtn = document.getElementById('dh-filter-search-btn');
    searchBtn?.addEventListener('click', () => {
      const arrivalDateVal = document.getElementById('dh-filter-arrival-date')?.value || '';
      const lotCodeVal = document.getElementById('dh-filter-lot-code')?.value || 'ALL';
      const plantVal = document.getElementById('dh-filter-plant')?.value || 'ALL';
      const stationVal = document.getElementById('dh-filter-station')?.value || 'ALL';
      const deheadDateVal = document.getElementById('dh-filter-dehead-date')?.value || '';
      const shiftVal = document.getElementById('dh-filter-shift')?.value || 'ALL';
      const supervisorVal = document.getElementById('dh-filter-supervisor')?.value || 'ALL';

      const filtered = this.state.deheadingBatches.filter(b => {
        if (arrivalDateVal && b.arrivalDate && !b.arrivalDate.includes(arrivalDateVal)) return false;
        if (lotCodeVal !== 'ALL' && b.arrivalCode !== lotCodeVal) return false;
        if (plantVal !== 'ALL' && b.productionPlant !== plantVal) return false;
        if (stationVal !== 'ALL' && b.deheadingStation !== stationVal) return false;
        if (deheadDateVal && b.deheadingDate && !b.deheadingDate.includes(deheadDateVal)) return false;
        if (shiftVal !== 'ALL' && b.shift !== shiftVal) return false;
        if (supervisorVal !== 'ALL' && b.supervisor !== supervisorVal) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Applied filters: ${filtered.length} deheading record(s) matched`, 'info');
    });
  },

  showNewDeheadingModal(container) {
    const today = new Date().toLocaleDateString('en-CA');
    const fields = [
      { name: 'arrivalCode', label: 'Arrival / Lot Code' },
      { name: 'arrivalDate', label: 'Arrival Date', type: 'date', value: today },
      { name: 'productionPlant', label: 'Production Plant', options: [...new Set(this.state.deheadingBatches.map(batch => batch.productionPlant))] },
      { name: 'center', label: 'Center', options: [...new Set(this.state.deheadingBatches.map(batch => batch.center))] },
      { name: 'deheadingStation', label: 'Deheading Station', options: [...new Set(this.state.deheadingBatches.map(batch => batch.deheadingStation))] },
      { name: 'deheadingDate', label: 'Deheading Date', type: 'date', value: today },
      { name: 'shift', label: 'Shift', options: ['Shift A (Day)', 'Shift B (Evening)', 'Shift C (Night)'] },
      { name: 'supervisor', label: 'Supervisor', options: [...new Set(this.state.deheadingBatches.map(batch => batch.supervisor))] },
      { name: 'species', label: 'Species', options: [...new Set(this.state.deheadingBatches.map(batch => batch.species))] },
      { name: 'checkingCount2', label: 'Checking Count-2', type: 'number' },
      { name: 'honCount', label: 'HON Count', type: 'number' },
      { name: 'hlCount', label: 'HL Count', type: 'number' },
      { name: 'honQuantityKgs', label: 'HON Quantity (Kgs)', type: 'number', min: '0.01' },
      { name: 'hlQuantityKgs', label: 'HL Quantity (Kgs)', type: 'number', min: '0.01' },
      { name: 'iceConsumption', label: 'Ice Consumption', optional: true },
      { name: 'remarks', label: 'Remarks', optional: true }
    ];
    Modal.open({
      title: 'Add Deheading',
      size: 'lg',
      content: `<form id="form-add-deheading" class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        ${fields.map(field => `<div>
          <label for="ndh-${field.name}" class="block text-xs font-semibold mb-0">${field.label}${field.optional ? '' : ' *'}</label>
          ${field.options
            ? `<select id="ndh-${field.name}" name="${field.name}" class="w-full" required>${field.options.map(option => `<option></option>`).join('')}</select>`
            : `<input id="ndh-${field.name}" name="${field.name}" type="${field.type || 'text'}" value="${field.value || ''}" ${field.type === 'number' ? `min="${field.min || '0'}" step="any"` : ''} ${field.optional ? '' : 'required'} class="w-full" />`}
        </div>`).join('')}
      </form>`,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: modal => modal.close() },
        { label: 'Save Deheading', type: 'primary', onClick: () => document.getElementById('form-add-deheading')?.requestSubmit() }
      ]
    });
    const form = document.getElementById('form-add-deheading');
    fields.filter(field => field.options).forEach(field => {
      const select = form.elements.namedItem(field.name);
      field.options.forEach((value, index) => {
        select.options[index].textContent = value;
        select.options[index].value = value;
      });
    });
    form.addEventListener('submit', event => {
      event.preventDefault();
      const values = Object.fromEntries(new FormData(form));
      const inputWeight = Number(values.honQuantityKgs);
      const outputWeight = Number(values.hlQuantityKgs);
      if (outputWeight > inputWeight) {
        Toast.show('HL quantity cannot exceed HON quantity', 'error');
        return;
      }
      const yieldPct = Number((outputWeight / inputWeight * 100).toFixed(1));
      const nextSequence = Math.max(100, ...this.state.deheadingBatches.map(batch => Number(batch.id.split('-').pop()) || 0)) + 1;
      const entry = {
        ...values,
        id: `DH-${values.deheadingDate.slice(0, 4)}-${nextSequence}`,
        lotNo: values.arrivalCode,
        deheadingDate: values.deheadingDate.split('-').reverse().join('/'),
        checkingCount2: Number(values.checkingCount2),
        honCount: Number(values.honCount),
        hlCount: Number(values.hlCount),
        honQuantityKgs: inputWeight,
        hlQuantityKgs: outputWeight,
        inputHonWt: inputWeight,
        outputDhWt: outputWeight,
        yieldPct,
        countNetYieldPct: yieldPct,
        recoveryPct: yieldPct,
        sampleYieldPct: yieldPct,
        wasteHeadWt: inputWeight - outputWeight,
        rejectionsWt: 0,
        lineNo: values.deheadingStation,
        operators: 0,
        status: 'IN_PROGRESS',
        startTime: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
        endTime: ''
      };
      this.state.deheadingBatches.unshift(entry);
      this.state.deheadingBatches.forEach((batch, index) => { batch.sNo = index + 1; });
      Modal.close();
      this.renderDeheadingScreen(container);
      Toast.show(`Deheading batch ${entry.id} added`, 'success');
    });
  },

  // =========================================================================
  // SCREEN 3: GRADING (OPERATIONS TAB 2)
  // =========================================================================
  renderGradingScreen(container) {
    container.innerHTML = `
      <div class="space-y-4">
        <!-- Top Action Bar (No Subheading) -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-0">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">Grading</h1>
          </div>
          <div>
            <button type="button" id="btn-new-grading-run" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer border-0">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Add Grading</span>
            </button>
          </div>
        </div>

        <!-- Filter Card: Exact User Application UI Style -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>

            <!-- Filter Controls: Reset & Toggle Open/Close -->
            <div class="inline-flex items-center" style="gap: 8px; display: inline-flex;">
              <button type="button" id="grading-top-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-7 h-7 min-w-[28px] min-h-[28px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-none transition-colors cursor-pointer select-none" style="width: 28px; height: 28px; min-width: 28px; min-height: 28px; border-radius: 0; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Reset all filters" aria-label="Reset all filters">
                <svg class="w-4 h-4 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>

              <button type="button" id="grading-top-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-7 h-7 min-w-[28px] min-h-[28px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-none transition-colors cursor-pointer select-none" style="width: 28px; height: 28px; min-width: 28px; min-height: 28px; border-radius: 0; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Hide Filter" aria-label="Hide Filter">
                <svg class="w-4 h-4 text-current dt-top-filter-toggle-icon transform transition-transform duration-200" id="grading-top-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <!-- Collapsible Filter Inputs Grid (14 Fields + Search Button) -->
          <div id="grading-top-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
            <!-- 1. ARRIVAL/LOT CODE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL / LOT CODE</label>
              <select id="gr-filter-lot-code" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">All Arrival / Lot Codes</option>
                <option value="LOT-2026-00125">LOT-2026-00125</option>
                <option value="LOT-2026-00126">LOT-2026-00126</option>
                <option value="LOT-2026-00127">LOT-2026-00127</option>
                <option value="LOT-2026-00128">LOT-2026-00128</option>
                <option value="LOT-2026-00129">LOT-2026-00129</option>
              </select>
            </div>

            <!-- 2. PRODUCTION PLANT -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT</label>
              <select id="gr-filter-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">All Production Plants</option>
                <option value="DFL UNIT-5 (JPT)">DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
                <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-6 (JPT-II)">DFL UNIT-6 (JPT-II)</option>
              </select>
            </div>

            <!-- 3. GRADING STATION -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GRADING STATION</label>
              <select id="gr-filter-station" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Stations</option>
                <option value="Grading Line #1">Grading Line #1</option>
                <option value="Grading Line #2">Grading Line #2</option>
                <option value="Grading Line #3">Grading Line #3</option>
                <option value="Fish Sizing Table #1">Fish Sizing Table #1</option>
              </select>
            </div>

            <!-- 4. GRADING DATE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GRADING DATE</label>
              <div class="erp-date-wrapper">
                <input type="date" id="gr-filter-grading-date" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 5. GRADING MACHINE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GRADING MACHINE</label>
              <select id="gr-filter-machine" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Machines</option>
                <option value="Auto Grader #1">Auto Grader #1</option>
                <option value="Auto Grader #2">Auto Grader #2</option>
                <option value="Auto Grader #3">Auto Grader #3</option>
                <option value="Manual Sizer #2">Manual Sizer #2</option>
              </select>
            </div>

            <!-- 6. SELECT VARIETY -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SELECT VARIETY</label>
              <select id="gr-filter-variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Varieties</option>
                <option value="Vannamei (VM)">Vannamei (VM)</option>
                <option value="Black Tiger (BT)">Black Tiger (BT)</option>
                <option value="Asian Seabass">Asian Seabass</option>
              </select>
            </div>

            <!-- 7. ARRIVAL DATE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL DATE</label>
              <div class="erp-date-wrapper">
                <input type="date" id="gr-filter-arrival-date" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 8. Search Button Slot -->
            <div class="flex items-end">
              <button type="button" id="gr-filter-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Data Table Container -->
        <div id="grading-table-container"></div>
      </div>
    `;

    document.getElementById('btn-new-grading-run')?.addEventListener('click', () => this.showNewGradingModal(container));

    // Toggle filter open/close handler
    const toggleBtn = document.getElementById('grading-top-toggle-btn');
    toggleBtn?.addEventListener('click', () => {
      const body = document.getElementById('grading-top-filter-body');
      const icon = document.getElementById('grading-top-toggle-icon');
      if (body) {
        body.classList.toggle('hidden');
        if (body.classList.contains('hidden')) {
          toggleBtn.title = 'Show Filter';
          icon?.classList.add('-rotate-90');
        } else {
          toggleBtn.title = 'Hide Filter';
          icon?.classList.remove('-rotate-90');
        }
      }
    });

    // Reset filter handler
    const resetBtn = document.getElementById('grading-top-reset-btn');
    resetBtn?.addEventListener('click', () => {
      if (document.getElementById('gr-filter-arrival-date')) document.getElementById('gr-filter-arrival-date').value = '';
      if (document.getElementById('gr-filter-lot-code')) document.getElementById('gr-filter-lot-code').value = 'ALL';
      if (document.getElementById('gr-filter-plant')) document.getElementById('gr-filter-plant').value = 'ALL';
      if (document.getElementById('gr-filter-station')) document.getElementById('gr-filter-station').value = 'ALL';
      if (document.getElementById('gr-filter-grading-date')) document.getElementById('gr-filter-grading-date').value = '';
      if (document.getElementById('gr-filter-machine')) document.getElementById('gr-filter-machine').value = 'ALL';
      if (document.getElementById('gr-filter-variety')) document.getElementById('gr-filter-variety').value = 'ALL';

      renderTable(this.state.gradingRuns);
      Toast.show('Filters reset', 'info');
    });

    // Initialize the DataTable matching all columns
    const renderTable = (data) => {
      new DataTable({
        containerId: 'grading-table-container',
        data: data,
        keyField: 'id',
        tableTitle: 'Grading Runs & Output Breakdown',
        searchable: true,
        exportable: true,
        pageSize: 10,
        columns: [
          // 1. S.No
          {
            field: 'sNo',
            header: 'S.No',
            render: (v, row, idx) => `<span class="text-[#5E6C84] font-semibold">${v || (idx + 1)}</span>`
          },
          // 2. Arrival/Lot Code
          {
            field: 'arrivalCode',
            header: 'Arrival/Lot Code',
            render: (v) => `<span class="font-bold text-[#00A4B7]">${v}</span>`
          },
          // 3. Production Plant
          {
            field: 'productionPlant',
            header: 'Production Plant',
            render: (v) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 4. Grading Station
          {
            field: 'gradingStation',
            header: 'Grading Station',
            render: (v) => `<span class="text-[#42526E] whitespace-nowrap">${v}</span>`
          },
          // 5. Grading Date
          {
            field: 'gradingDate',
            header: 'Grading Date',
            render: (v) => `<span class="text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 6. Grading Machine
          {
            field: 'gradingMachine',
            header: 'Grading Machine',
            render: (v) => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F4F5F7] text-[#42526E] border border-[#DFE1E6] whitespace-nowrap">${v}</span>`
          },
          // 7. Shift / Time
          {
            field: 'startTime',
            header: 'Shift / Time',
            render: (v, row) => `<span class="text-xs font-medium text-[#172B4D] whitespace-nowrap">${row.startTime} - ${row.endTime}</span>`
          },
          // 8. Break Time (Mins)
          {
            field: 'breakTimeMinutes',
            header: 'Break Time(Mins)',
            render: (v) => `<span class="font-mono text-xs text-[#5E6C84]">${v} mins</span>`
          },
          // 9. Variety
          {
            field: 'variety',
            header: 'Variety',
            render: (v) => `<span class="text-[#172B4D] font-medium whitespace-nowrap">${v}</span>`
          },
          // 10. HL Count (Per Lb)
          {
            field: 'hlCountPerLb',
            header: 'HL Count(Per Lb)',
            render: (v) => `<span class="font-mono text-xs font-bold text-[#0284C7] whitespace-nowrap">${v}</span>`
          },
          // 11. HL Weight (Kgs)
          {
            field: 'hlWeightKgs',
            header: 'HL Weight(Kgs)',
            render: (v) => `<span class="font-bold text-[#00875A] whitespace-nowrap">${Number(v).toLocaleString()} Kg</span>`
          },
          // 12. No of Crates
          {
            field: 'noOfCrates',
            header: 'No Of Crates',
            render: (v) => `<span class="font-bold text-[#172B4D]">${v}</span>`
          },
          // 13. Remarks
          {
            field: 'remarks',
            header: 'Remarks',
            render: (v) => `<span class="text-xs text-[#5E6C84] truncate max-w-[150px] block" title="${v}">${v}</span>`
          }
          // 14. Actions (auto-appended, center-aligned)
        ],
        actions: [
          {
            label: 'Edit',
            icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: (row) => this.showEditGradingModal(row, container)
          },
          {
            label: 'Delete',
            icon: `<svg class="w-4 h-4 text-[#FF5630]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Delete Grading Run',
                message: `Are you sure you want to delete the grading run record for <strong class="text-[#00A4B7]">${row.arrivalCode}</strong> (${row.id})? This action cannot be undone.`,
                confirmText: 'Yes, Delete',
                cancelText: 'Cancel',
                isDestructive: true,
                onConfirm: () => {
                  const idx = this.state.gradingRuns.findIndex(r => r.id === row.id);
                  if (idx !== -1) {
                    this.state.gradingRuns.splice(idx, 1);
                    renderTable(this.state.gradingRuns);
                    Toast.show(`Grading record ${row.arrivalCode} deleted`, 'info');
                  }
                }
              });
            }
          }
        ],
        onRowClick: (row) => this.showGradingDetailsModal(row)
      });
    };

    renderTable(this.state.gradingRuns);

    // Search button event binding
    const searchBtn = document.getElementById('gr-filter-search-btn');
    searchBtn?.addEventListener('click', () => {
      const arrivalDateVal = document.getElementById('gr-filter-arrival-date')?.value || '';
      const lotCodeVal = document.getElementById('gr-filter-lot-code')?.value || 'ALL';
      const plantVal = document.getElementById('gr-filter-plant')?.value || 'ALL';
      const stationVal = document.getElementById('gr-filter-station')?.value || 'ALL';
      const gradingDateVal = document.getElementById('gr-filter-grading-date')?.value || '';
      const machineVal = document.getElementById('gr-filter-machine')?.value || 'ALL';
      const varietyVal = document.getElementById('gr-filter-variety')?.value || 'ALL';

      const filtered = this.state.gradingRuns.filter(r => {
        if (arrivalDateVal && r.arrivalDate && !r.arrivalDate.includes(arrivalDateVal)) return false;
        if (lotCodeVal !== 'ALL' && r.arrivalCode !== lotCodeVal) return false;
        if (plantVal !== 'ALL' && r.productionPlant !== plantVal) return false;
        if (stationVal !== 'ALL' && r.gradingStation !== stationVal) return false;
        if (gradingDateVal && r.gradingDate && !r.gradingDate.includes(gradingDateVal)) return false;
        if (machineVal !== 'ALL' && r.gradingMachine !== machineVal) return false;
        if (varietyVal !== 'ALL' && r.variety !== varietyVal) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Applied filters: ${filtered.length} grading record(s) matched`, 'info');
    });
  },

  // =========================================================================
  // SCREEN 4: RM RECEIVED TRACKID (OPERATIONS TAB 3)
  // =========================================================================
  renderRmReceivedTrackIdScreen(container) {
    container.innerHTML = `
      <div class="space-y-4">
        <!-- Top Action Bar (No Subheading) -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-0">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">RM Received Track ID Registry</h1>
          </div>
          <div>
            <button type="button" id="btn-gen-rm-trackid" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer border-0">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Generate RM Track ID</span>
            </button>
          </div>
        </div>

        <!-- Filter Card: Exact User Application UI Style -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>

            <!-- Filter Controls: Reset & Toggle Open/Close -->
            <div class="inline-flex items-center" style="gap: 8px; display: inline-flex;">
              <button type="button" id="rmtrack-top-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-7 h-7 min-w-[28px] min-h-[28px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-none transition-colors cursor-pointer select-none" style="width: 28px; height: 28px; min-width: 28px; min-height: 28px; border-radius: 0; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Reset all filters" aria-label="Reset all filters">
                <svg class="w-4 h-4 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>

              <button type="button" id="rmtrack-top-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-7 h-7 min-w-[28px] min-h-[28px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-none transition-colors cursor-pointer select-none" style="width: 28px; height: 28px; min-width: 28px; min-height: 28px; border-radius: 0; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Hide Filter" aria-label="Hide Filter">
                <svg class="w-4 h-4 text-current dt-top-filter-toggle-icon transform transition-transform duration-200" id="rmtrack-top-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <!-- Collapsible Filter Inputs Grid (2 Balanced Rows × 4 Columns) -->
          <div id="rmtrack-top-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
            <!-- 1. PRODUCTION PLANT -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT</label>
              <select id="rmt-filter-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">All Production Plants</option>
                <option value="DFL UNIT-5 (JPT)">DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
                <option value="DFL UNIT-6 (JPT-II)">DFL UNIT-6 (JPT-II)</option>
                <option value="DFL UNIT-2 (KKD)">DFL UNIT-2 (KKD)</option>
              </select>
            </div>

            <!-- 2. ARRIVAL DATE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL DATE</label>
              <div class="erp-date-wrapper">
                <input type="date" id="rmt-filter-arrival-date" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 3. VEHICLE NUMBER -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VEHICLE NUMBER</label>
              <input type="text" id="rmt-filter-vehicle" placeholder="e.g. AP 16 TZ" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono" />
            </div>

            <!-- 4. SUPERVISOR -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SUPERVISOR</label>
              <select id="rmt-filter-supervisor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Supervisors</option>
                <option value="Laxmi Narayana">Laxmi Narayana</option>
                <option value="K. Subba Rao">K. Subba Rao</option>
                <option value="Ch. Prasad">Ch. Prasad</option>
                <option value="Mallesh">Mallesh</option>
                <option value="D. Rambabu">D. Rambabu</option>
                <option value="G. Suribabu">G. Suribabu</option>
              </select>
            </div>

            <!-- 5. TRACK CODE FORMAT -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRACK CODE FORMAT</label>
              <select id="rmt-filter-format" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Formats</option>
                <option value="TRK-RM-[YYYY]-[SEQ]">TRK-RM-[YYYY]-[SEQ]</option>
                <option value="TRK-PLANT-[CODE]-[SEQ]">TRK-PLANT-[CODE]-[SEQ]</option>
                <option value="RFID-INTAKE-[BATCH]">RFID-INTAKE-[BATCH]</option>
              </select>
            </div>

            <!-- 6. SEAL NUMBER -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SEAL NUMBER</label>
              <input type="text" id="rmt-filter-seal" placeholder="e.g. SL-8849" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono" />
            </div>

            <!-- 7. TRACK ID SEARCH -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRACK ID</label>
              <input type="text" id="rmt-filter-trackid" placeholder="Filter Track ID..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono" />
            </div>

            <!-- 8. Search Button Slot (Compact, Natural Width) -->
            <div class="flex items-end">
              <button type="button" id="rmt-filter-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Table Container -->
        <div id="rm-trackid-table-container"></div>
      </div>
    `;

    // Button Generate Handler
    document.getElementById('btn-gen-rm-trackid')?.addEventListener('click', () => {
      this.showGenerateRmTrackModal(container);
    });

    // Toggle filter open/close handler
    const toggleBtn = document.getElementById('rmtrack-top-toggle-btn');
    toggleBtn?.addEventListener('click', () => {
      const body = document.getElementById('rmtrack-top-filter-body');
      const icon = document.getElementById('rmtrack-top-toggle-icon');
      if (body) {
        body.classList.toggle('hidden');
        if (body.classList.contains('hidden')) {
          toggleBtn.title = 'Show Filter';
          icon?.classList.add('-rotate-90');
        } else {
          toggleBtn.title = 'Hide Filter';
          icon?.classList.remove('-rotate-90');
        }
      }
    });

    // Reset filter handler
    const resetBtn = document.getElementById('rmtrack-top-reset-btn');
    resetBtn?.addEventListener('click', () => {
      if (document.getElementById('rmt-filter-plant')) document.getElementById('rmt-filter-plant').value = 'ALL';
      if (document.getElementById('rmt-filter-arrival-date')) document.getElementById('rmt-filter-arrival-date').value = '';
      if (document.getElementById('rmt-filter-vehicle')) document.getElementById('rmt-filter-vehicle').value = '';
      if (document.getElementById('rmt-filter-supervisor')) document.getElementById('rmt-filter-supervisor').value = 'ALL';
      if (document.getElementById('rmt-filter-format')) document.getElementById('rmt-filter-format').value = 'ALL';
      if (document.getElementById('rmt-filter-seal')) document.getElementById('rmt-filter-seal').value = '';
      if (document.getElementById('rmt-filter-trackid')) document.getElementById('rmt-filter-trackid').value = '';

      renderTable(this.state.rmTrackIds);
      Toast.show('Filters reset', 'info');
    });

    // Table render function
    const renderTable = (data) => {
      new DataTable({
        containerId: 'rm-trackid-table-container',
        data: data,
        keyField: 'trackId',
        tableTitle: 'Inward Raw Material Track ID Registry',
        searchable: true,
        exportable: true,
        pageSize: 10,
        columns: [
          // 1. S.No
          {
            field: 'sNo',
            header: 'S.No',
            render: (v, row, idx) => `<span class="text-[#5E6C84] font-semibold">${v || (idx + 1)}</span>`
          },
          // 2. Track ID
          {
            field: 'trackId',
            header: 'Track ID',
            render: (v) => `<span class="font-mono font-bold text-[#00A4B7] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BAE6FD] whitespace-nowrap">${v}</span>`
          },
          // 3. Production Plant
          {
            field: 'productionPlant',
            header: 'Production Plant',
            render: (v) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 4. Arrival Date
          {
            field: 'arrivalDate',
            header: 'Arrival Date',
            render: (v) => `<span class="text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 5. Vehicle Number
          {
            field: 'vehicleNumber',
            header: 'Vehicle Number',
            render: (v) => `<span class="font-mono text-xs font-bold text-[#172B4D] bg-[#F4F5F7] px-2 py-0.5 rounded border border-[#DFE1E6] whitespace-nowrap">${v}</span>`
          },
          // 6. Track Code Format
          {
            field: 'trackCodeFormat',
            header: 'Track Code Format',
            render: (v) => `<span class="font-mono text-xs text-[#5E6C84] bg-white px-1.5 py-0.5 rounded border border-[#DFE1E6] whitespace-nowrap">${v}</span>`
          },
          // 7. Seal Number
          {
            field: 'sealNumber',
            header: 'Seal Number',
            render: (v) => `<span class="font-mono text-xs font-semibold text-[#00875A] whitespace-nowrap">${v}</span>`
          },
          // 8. Supervisor
          {
            field: 'supervisor',
            header: 'Supervisor',
            render: (v) => `<span class="font-medium text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 9. Remarks
          {
            field: 'remarks',
            header: 'Remarks',
            render: (v) => `<span class="text-xs text-[#5E6C84] truncate max-w-[200px] block" title="${v}">${v}</span>`
          }
          // 10. Actions (automatically appended and centered)
        ],
        actions: [
          {
            label: 'Edit',
            icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: (row) => this.showEditRmTrackModal(row, container)
          },
          {
            label: 'Delete',
            icon: `<svg class="w-4 h-4 text-[#FF5630]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Delete RM Track ID',
                message: `Are you sure you want to delete RM Track ID <strong class="text-[#00A4B7]">${row.trackId}</strong> (${row.vehicleNumber})? This action cannot be undone.`,
                confirmText: 'Yes, Delete',
                cancelText: 'Cancel',
                isDestructive: true,
                onConfirm: () => {
                  const idx = this.state.rmTrackIds.findIndex(r => r.id === row.id || r.trackId === row.trackId);
                  if (idx !== -1) {
                    this.state.rmTrackIds.splice(idx, 1);
                    renderTable(this.state.rmTrackIds);
                    Toast.show(`RM Track ID ${row.trackId} deleted`, 'info');
                  }
                }
              });
            }
          }
        ],
        onRowClick: (row) => this.showRmTrackDetailsModal(row)
      });
    };

    renderTable(this.state.rmTrackIds);

    // Search button event binding
    const searchBtn = document.getElementById('rmt-filter-search-btn');
    searchBtn?.addEventListener('click', () => {
      const plantVal = document.getElementById('rmt-filter-plant')?.value || 'ALL';
      const arrDateVal = document.getElementById('rmt-filter-arrival-date')?.value || '';
      const vehicleVal = (document.getElementById('rmt-filter-vehicle')?.value || '').toLowerCase().trim();
      const supVal = document.getElementById('rmt-filter-supervisor')?.value || 'ALL';
      const formatVal = document.getElementById('rmt-filter-format')?.value || 'ALL';
      const sealVal = (document.getElementById('rmt-filter-seal')?.value || '').toLowerCase().trim();
      const trackIdVal = (document.getElementById('rmt-filter-trackid')?.value || '').toLowerCase().trim();

      const filtered = this.state.rmTrackIds.filter(r => {
        if (plantVal !== 'ALL' && r.productionPlant !== plantVal) return false;
        if (arrDateVal && r.arrivalDate && !r.arrivalDate.includes(arrDateVal)) return false;
        if (vehicleVal && !String(r.vehicleNumber).toLowerCase().includes(vehicleVal)) return false;
        if (supVal !== 'ALL' && r.supervisor !== supVal) return false;
        if (formatVal !== 'ALL' && r.trackCodeFormat !== formatVal) return false;
        if (sealVal && !String(r.sealNumber).toLowerCase().includes(sealVal)) return false;
        if (trackIdVal && !String(r.trackId).toLowerCase().includes(trackIdVal)) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Applied filters: ${filtered.length} track ID record(s) matched`, 'info');
    });
  },

  // Show Generate RM Track ID Modal
  showGenerateRmTrackModal(container) {
    // Initial sample lots for inward arrival
    let lotRows = [
      {
        sNo: 1,
        billNo: 'BILL-2026-0891',
        variety: 'Vannamei (White Shrimp)',
        count: 40,
        headOnWeight: 1250.00,
        recvCount: 42,
        recvWeight: 1242.50,
        sampleHoQty: 2.50,
        noOfPcs: 105
      },
      {
        sNo: 2,
        billNo: 'BILL-2026-0892',
        variety: 'Black Tiger (P. Monodon)',
        count: 30,
        headOnWeight: 850.00,
        recvCount: 30,
        recvWeight: 855.00,
        sampleHoQty: 2.00,
        noOfPcs: 60
      },
      {
        sNo: 3,
        billNo: 'BILL-2026-0893',
        variety: 'Vannamei (White Shrimp)',
        count: 50,
        headOnWeight: 1420.00,
        recvCount: 48,
        recvWeight: 1410.00,
        sampleHoQty: 3.00,
        noOfPcs: 144
      }
    ];

    const varietiesList = [
      'Vannamei (White Shrimp)',
      'Black Tiger (P. Monodon)',
      'Freshwater Scampi',
      'Pink Shrimp (Sea Caught)',
      'Brown Shrimp',
      'Flower Shrimp'
    ];

    const buildLotsTableHtml = () => {
      let totalHoWeight = 0;
      let totalRecvWeight = 0;
      let totalSampleQty = 0;
      let totalPcs = 0;
      let totalQtyDiff = 0;

      const rowsHtml = lotRows.map((lot, idx) => {
        const countDiff = Number((lot.recvCount - lot.count).toFixed(1));
        const qtyDiff = Number((lot.recvWeight - lot.headOnWeight).toFixed(2));

        totalHoWeight += Number(lot.headOnWeight) || 0;
        totalRecvWeight += Number(lot.recvWeight) || 0;
        totalSampleQty += Number(lot.sampleHoQty) || 0;
        totalPcs += Number(lot.noOfPcs) || 0;
        totalQtyDiff += qtyDiff;

        const countDiffClass = countDiff === 0 ? 'text-[#00875A]' : countDiff > 0 ? 'text-[#0284C7]' : 'text-[#DE350B]';
        const qtyDiffClass = qtyDiff >= 0 ? 'text-[#00875A]' : 'text-[#DE350B]';

        return `
          <tr class="hover:bg-[#F8FAFC] transition-colors lot-row" data-index="${idx}">
            <!-- 1. S.No -->
            <td class="py-2.5 px-3 text-center font-bold text-[#5E6C84] bg-[#FAFBFC] border-r border-[#E2E8F0]">
              ${idx + 1}
            </td>

            <!-- 2. Bill No -->
            <td class="py-2 px-2.5">
              <input type="text" class="lot-bill-input font-mono font-bold text-[#00A4B7] w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#00A4B7]" value="${lot.billNo || ''}" placeholder="BILL-2026-..." />
            </td>

            <!-- 3. Variety -->
            <td class="py-2 px-2.5">
              <select class="lot-variety-select w-full text-xs px-2 py-1.5 bg-white border border-[#CBD5E1] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7]">
                ${varietiesList.map(v => `<option value="${v}" ${lot.variety === v ? 'selected' : ''}>${v}</option>`).join('')}
              </select>
            </td>

            <!-- 4. Count -->
            <td class="py-2 px-2">
              <input type="number" step="0.5" class="lot-count-input font-mono text-right w-full text-xs px-2 py-1.5 bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#00A4B7]" value="${lot.count ?? ''}" placeholder="40" />
            </td>

            <!-- 5. Head on Weight -->
            <td class="py-2 px-2">
              <input type="number" step="0.01" class="lot-howeight-input font-mono font-bold text-right w-full text-xs px-2 py-1.5 bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#00A4B7]" value="${lot.headOnWeight ?? ''}" placeholder="0.00" />
            </td>

            <!-- 6. Recv Count -->
            <td class="py-2 px-2">
              <input type="number" step="0.5" class="lot-recvcount-input font-mono text-right w-full text-xs px-2 py-1.5 bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#00A4B7]" value="${lot.recvCount ?? ''}" placeholder="42" />
            </td>

            <!-- 7. Recv Weight -->
            <td class="py-2 px-2">
              <input type="number" step="0.01" class="lot-recvweight-input font-mono font-bold text-right w-full text-xs px-2 py-1.5 bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#00A4B7]" value="${lot.recvWeight ?? ''}" placeholder="0.00" />
            </td>

            <!-- 8. Sample HO Qty -->
            <td class="py-2 px-2">
              <input type="number" step="0.01" class="lot-sampleqty-input font-mono text-right w-full text-xs px-2 py-1.5 bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#00A4B7]" value="${lot.sampleHoQty ?? ''}" placeholder="2.5" />
            </td>

            <!-- 9. No Of Pcs -->
            <td class="py-2 px-2">
              <input type="number" step="1" class="lot-nopcs-input font-mono text-right w-full text-xs px-2 py-1.5 bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#00A4B7]" value="${lot.noOfPcs ?? ''}" placeholder="100" />
            </td>

            <!-- 10. Count Diff -->
            <td class="py-2.5 px-3 text-right font-mono font-bold text-xs ${countDiffClass} row-count-diff">
              ${countDiff > 0 ? '+' : ''}${countDiff.toFixed(1)}
            </td>

            <!-- 11. Qty Diff -->
            <td class="py-2.5 px-3 text-right font-mono font-bold text-xs ${qtyDiffClass} row-qty-diff">
              ${qtyDiff > 0 ? '+' : ''}${qtyDiff.toFixed(2)} Kgs
            </td>

            <!-- 12. Actions -->
            <td class="py-2.5 px-2 text-center">
              <button type="button" class="btn-del-lot-row w-7 h-7 rounded-full inline-flex items-center justify-center text-[#FF5630] hover:bg-[#FFEBE6] transition-colors cursor-pointer" title="Delete Row" data-index="${idx}">
                <svg class="w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
              </button>
            </td>
          </tr>
        `;
      }).join('');

      const netQtyDiffClass = totalQtyDiff >= 0 ? 'text-[#00875A]' : 'text-[#DE350B]';

      return `
        <div class="bg-white rounded-xl border border-[#DFE1E6] shadow-2xs overflow-hidden">
          <div class="overflow-x-auto" style="overflow-x: auto !important; -webkit-overflow-scrolling: touch;">
            <table class="w-full text-left text-xs border-collapse" style="min-width: 1250px;">
              <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th class="py-2.5 px-3 w-12 text-center">S.No</th>
                  <th class="py-2.5 px-3 min-w-[145px]">Bill No</th>
                  <th class="py-2.5 px-3 min-w-[170px]">Variety</th>
                  <th class="py-2.5 px-2 min-w-[95px] text-right">Count</th>
                  <th class="py-2.5 px-2 min-w-[125px] text-right">Head on Weight</th>
                  <th class="py-2.5 px-2 min-w-[95px] text-right">Recv Count</th>
                  <th class="py-2.5 px-2 min-w-[125px] text-right">Recv Weight</th>
                  <th class="py-2.5 px-2 min-w-[110px] text-right">Sample HO Qty</th>
                  <th class="py-2.5 px-2 min-w-[95px] text-right">No Of Pcs</th>
                  <th class="py-2.5 px-3 min-w-[100px] text-right">Count Diff</th>
                  <th class="py-2.5 px-3 min-w-[115px] text-right">Qty Diff</th>
                  <th class="py-2.5 px-2 w-16 text-center">Actions</th>
                </tr>
              </thead>
              <tbody id="rm-lots-tbody" class="divide-y divide-[#E2E8F0] text-[#1E293B]">
                ${rowsHtml}
              </tbody>
              <tfoot class="bg-[#F8FAFC] border-t-2 border-[#DFE1E6] font-bold text-xs text-[#0F172A]">
                <tr>
                  <td colspan="4" class="py-3 px-3 text-right uppercase tracking-wider text-[#475569]">
                    Total Aggregates:
                  </td>
                  <td id="tot-ho-weight" class="py-3 px-2 text-right font-mono text-sm text-[#0C4A6E]">
                    ${totalHoWeight.toFixed(2)} Kgs
                  </td>
                  <td></td>
                  <td id="tot-recv-weight" class="py-3 px-2 text-right font-mono text-sm text-[#00A4B7]">
                    ${totalRecvWeight.toFixed(2)} Kgs
                  </td>
                  <td id="tot-sample-qty" class="py-3 px-2 text-right font-mono text-sm text-[#475569]">
                    ${totalSampleQty.toFixed(2)} Kgs
                  </td>
                  <td id="tot-pcs" class="py-3 px-2 text-right font-mono text-sm text-[#475569]">
                    ${totalPcs}
                  </td>
                  <td></td>
                  <td id="tot-qty-diff" class="py-3 px-3 text-right font-mono text-sm ${netQtyDiffClass}">
                    ${totalQtyDiff > 0 ? '+' : ''}${totalQtyDiff.toFixed(2)} Kgs
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      `;
    };

    Modal.open({
      title: 'Generate RM Track ID',
      size: 'full',
      content: `
        <form id="form-gen-rm-track" class="space-y-4" onsubmit="return false;">
          <!-- 1. HEADER SPECIFICATION SECTION -->
          <div class="bg-[#F8FAFC] p-4 rounded-xl border border-[#DFE1E6]">
            <div class="flex items-center justify-between mb-3 border-b border-[#E2E8F0] pb-2">
              <span class="text-xs font-extrabold text-[#172B4D] uppercase tracking-wider flex items-center gap-1.5">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                Track ID Primary Registry Details
              </span>
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]">
                Gate Intake Inward
              </span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
              <!-- 1. PRODUCTION PLANT * -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT <span class="text-[#DE350B]">*</span></label>
                <select id="nrm-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                  <option value="DFL UNIT-5 (JPT)" selected>DFL UNIT-5 (JPT)</option>
                  <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                  <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                  <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
                  <option value="DFL UNIT-6 (JPT-II)">DFL UNIT-6 (JPT-II)</option>
                  <option value="DFL UNIT-2 (KKD)">DFL UNIT-2 (KKD)</option>
                </select>
              </div>

              <!-- 2. ARRIVAL DATE -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL DATE</label>
                <div class="erp-date-wrapper">
                  <input type="date" id="nrm-arrival-date" value="2026-10-07" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
                </div>
              </div>

              <!-- 3. VEHICLE NUMBER * -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VEHICLE NUMBER <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="nrm-vehicle" value="AP 16 TZ 5580" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" placeholder="e.g. AP 16 TZ 5580" />
              </div>

              <!-- 4. TRACK CODE FORMAT * -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRACK CODE FORMAT <span class="text-[#DE350B]">*</span></label>
                <select id="nrm-format" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                  <option value="TRK-RM-[YYYY]-[SEQ]" selected>TRK-RM-[YYYY]-[SEQ] (Standard)</option>
                  <option value="TRK-PLANT-[CODE]-[SEQ]">TRK-PLANT-[CODE]-[SEQ] (Plant Unique)</option>
                  <option value="RFID-INTAKE-[BATCH]">RFID-INTAKE-[BATCH] (RFID Tagging)</option>
                </select>
              </div>

              <!-- 5. SEAL NUMBER * -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SEAL NUMBER <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="nrm-seal" value="SL-884940" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#00875A] focus:outline-none focus:border-[#0284C7]" placeholder="e.g. SL-884940" />
              </div>

              <!-- 6. SUPERVISOR * -->
              <div>
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SUPERVISOR <span class="text-[#DE350B]">*</span></label>
                <select id="nrm-supervisor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                  <option value="Laxmi Narayana" selected>Laxmi Narayana</option>
                  <option value="K. Subba Rao">K. Subba Rao</option>
                  <option value="Ch. Prasad">Ch. Prasad</option>
                  <option value="Mallesh">Mallesh</option>
                  <option value="D. Rambabu">D. Rambabu</option>
                  <option value="G. Suribabu">G. Suribabu</option>
                </select>
              </div>

              <!-- 7. REMARKS -->
              <div class="sm:col-span-2">
                <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">REMARKS</label>
                <input type="text" id="nrm-remarks" value="Direct gate intake verified, seals intact and dock temperature compliant." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" placeholder="Gate security inspection & temperature checks passed..." />
              </div>
            </div>
          </div>

          <!-- 2. ITEMIZED BILLS & LOTS TABLE SECTION -->
          <div class="space-y-2 mt-4">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Arrival Bill / Lot Inspection Table</h4>
                <p class="text-[11px] text-[#5E6C84]">Itemized weights, count inspection, sample HO quantity, and automatic variance calculation</p>
              </div>
              <div>
                <button type="button" id="btn-add-rm-lot" class="btn-primary border-0 px-3.5 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                  <span>Add Bill / Lot</span>
                </button>
              </div>
            </div>

            <!-- Dynamic Table Container -->
            <div id="rm-lots-table-wrapper">
              ${buildLotsTableHtml()}
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        {
          label: 'Generate & Register',
          type: 'primary',
          onClick: (m) => {
            const plant = document.getElementById('nrm-plant')?.value || 'DFL UNIT-5 (JPT)';
            const arrDate = document.getElementById('nrm-arrival-date')?.value || '2026-10-07';
            const vehicle = document.getElementById('nrm-vehicle')?.value || 'AP 16 TZ 5580';
            const format = document.getElementById('nrm-format')?.value || 'TRK-RM-[YYYY]-[SEQ]';
            const seal = document.getElementById('nrm-seal')?.value || 'SL-884940';
            const sup = document.getElementById('nrm-supervisor')?.value || 'Laxmi Narayana';
            const rem = document.getElementById('nrm-remarks')?.value || 'Direct gate intake verified';

            // Extract table lot inputs
            const currentLots = [];
            const rows = document.querySelectorAll('#rm-lots-tbody tr.lot-row');
            rows.forEach((row, idx) => {
              const billNo = row.querySelector('.lot-bill-input')?.value || `BILL-2026-089${idx + 1}`;
              const variety = row.querySelector('.lot-variety-select')?.value || 'Vannamei (White Shrimp)';
              const count = parseFloat(row.querySelector('.lot-count-input')?.value) || 0;
              const headOnWeight = parseFloat(row.querySelector('.lot-howeight-input')?.value) || 0;
              const recvCount = parseFloat(row.querySelector('.lot-recvcount-input')?.value) || 0;
              const recvWeight = parseFloat(row.querySelector('.lot-recvweight-input')?.value) || 0;
              const sampleHoQty = parseFloat(row.querySelector('.lot-sampleqty-input')?.value) || 0;
              const noOfPcs = parseInt(row.querySelector('.lot-nopcs-input')?.value, 10) || 0;
              const countDiff = Number((recvCount - count).toFixed(1));
              const qtyDiff = Number((recvWeight - headOnWeight).toFixed(2));

              currentLots.push({
                sNo: idx + 1,
                billNo,
                variety,
                count,
                headOnWeight,
                recvCount,
                recvWeight,
                sampleHoQty,
                noOfPcs,
                countDiff,
                qtyDiff
              });
            });

            Modal.confirm({
              title: 'Confirm RM Track ID Generation',
              message: `Are you sure you want to generate a new RM Track ID for vehicle <strong class="text-[#00A4B7]">${vehicle}</strong> at <strong>${plant}</strong> with <strong>${currentLots.length} verified arrival lots</strong>?`,
              confirmText: 'Yes, Generate Track ID',
              cancelText: 'Cancel',
              isDestructive: false,
              onConfirm: () => {
                const seq = Math.floor(810 + Math.random() * 180);
                const generatedId = format.includes('PLANT') 
                  ? `TRK-${plant.split(' ')[1]}-2026-${seq}`
                  : format.includes('RFID')
                  ? `RFID-RM-2026-${seq}`
                  : `TRK-RM-2026-${seq}`;

                const newEntry = {
                  sNo: 1,
                  id: generatedId,
                  trackId: generatedId,
                  productionPlant: plant,
                  arrivalDate: arrDate,
                  vehicleNumber: vehicle,
                  trackCodeFormat: format,
                  sealNumber: seal,
                  supervisor: sup,
                  remarks: rem,
                  status: 'ACTIVE',
                  lots: currentLots
                };

                this.state.rmTrackIds.forEach(r => { if (r.sNo) r.sNo += 1; });
                this.state.rmTrackIds.unshift(newEntry);

                Toast.show(`RM Track ID ${generatedId} successfully generated with ${currentLots.length} lot(s)`, 'success', 'Track ID Active');
                this.renderRmReceivedTrackIdScreen(container);
              }
            });
          }
        }
      ]
    });

    // Attach dynamic table event listeners
    const modalEl = document.getElementById('erp-modal-root');
    if (!modalEl) return;

    const bindTableEvents = () => {
      const tableWrapper = modalEl.querySelector('#rm-lots-table-wrapper');
      if (!tableWrapper) return;

      const recalculateAll = () => {
        let totalHoWeight = 0;
        let totalRecvWeight = 0;
        let totalSampleQty = 0;
        let totalPcs = 0;
        let totalQtyDiff = 0;

        tableWrapper.querySelectorAll('tr.lot-row').forEach(row => {
          const idx = parseInt(row.dataset.index, 10);
          const count = parseFloat(row.querySelector('.lot-count-input')?.value) || 0;
          const headOnWeight = parseFloat(row.querySelector('.lot-howeight-input')?.value) || 0;
          const recvCount = parseFloat(row.querySelector('.lot-recvcount-input')?.value) || 0;
          const recvWeight = parseFloat(row.querySelector('.lot-recvweight-input')?.value) || 0;
          const sampleHoQty = parseFloat(row.querySelector('.lot-sampleqty-input')?.value) || 0;
          const noOfPcs = parseInt(row.querySelector('.lot-nopcs-input')?.value, 10) || 0;

          const countDiff = Number((recvCount - count).toFixed(1));
          const qtyDiff = Number((recvWeight - headOnWeight).toFixed(2));

          totalHoWeight += headOnWeight;
          totalRecvWeight += recvWeight;
          totalSampleQty += sampleHoQty;
          totalPcs += noOfPcs;
          totalQtyDiff += qtyDiff;

          const countDiffEl = row.querySelector('.row-count-diff');
          if (countDiffEl) {
            countDiffEl.textContent = `${countDiff > 0 ? '+' : ''}${countDiff.toFixed(1)}`;
            countDiffEl.className = `py-2.5 px-3 text-right font-mono font-bold text-xs row-count-diff ${countDiff === 0 ? 'text-[#00875A]' : countDiff > 0 ? 'text-[#0284C7]' : 'text-[#DE350B]'}`;
          }

          const qtyDiffEl = row.querySelector('.row-qty-diff');
          if (qtyDiffEl) {
            qtyDiffEl.textContent = `${qtyDiff > 0 ? '+' : ''}${qtyDiff.toFixed(2)} Kgs`;
            qtyDiffEl.className = `py-2.5 px-3 text-right font-mono font-bold text-xs row-qty-diff ${qtyDiff >= 0 ? 'text-[#00875A]' : 'text-[#DE350B]'}`;
          }

          if (!isNaN(idx) && lotRows[idx]) {
            lotRows[idx].billNo = row.querySelector('.lot-bill-input')?.value || '';
            lotRows[idx].count = count;
            lotRows[idx].headOnWeight = headOnWeight;
            lotRows[idx].recvCount = recvCount;
            lotRows[idx].recvWeight = recvWeight;
            lotRows[idx].sampleHoQty = sampleHoQty;
            lotRows[idx].noOfPcs = noOfPcs;
          }
        });

        const totHoEl = tableWrapper.querySelector('#tot-ho-weight');
        if (totHoEl) totHoEl.textContent = `${totalHoWeight.toFixed(2)} Kgs`;

        const totRecvEl = tableWrapper.querySelector('#tot-recv-weight');
        if (totRecvEl) totRecvEl.textContent = `${totalRecvWeight.toFixed(2)} Kgs`;

        const totSampleEl = tableWrapper.querySelector('#tot-sample-qty');
        if (totSampleEl) totSampleEl.textContent = `${totalSampleQty.toFixed(2)} Kgs`;

        const totPcsEl = tableWrapper.querySelector('#tot-pcs');
        if (totPcsEl) totPcsEl.textContent = `${totalPcs}`;

        const totDiffEl = tableWrapper.querySelector('#tot-qty-diff');
        if (totDiffEl) {
          totDiffEl.textContent = `${totalQtyDiff > 0 ? '+' : ''}${totalQtyDiff.toFixed(2)} Kgs`;
          totDiffEl.className = `py-3 px-3 text-right font-mono text-sm ${totalQtyDiff >= 0 ? 'text-[#00875A]' : 'text-[#DE350B]'}`;
        }
      };

      // Realtime input recalculation handler without re-rendering whole table
      tableWrapper.querySelectorAll('input').forEach(inp => {
        inp.addEventListener('input', recalculateAll);
      });

      // Variety select change handler
      tableWrapper.querySelectorAll('.lot-variety-select').forEach(sel => {
        sel.addEventListener('change', () => {
          const row = sel.closest('tr.lot-row');
          if (!row) return;
          const idx = parseInt(row.dataset.index, 10);
          if (!isNaN(idx) && lotRows[idx]) {
            lotRows[idx].variety = sel.value;
          }
        });
      });

      // Delete Row Button
      tableWrapper.querySelectorAll('.btn-del-lot-row').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.index, 10);
          if (lotRows.length <= 1) {
            Toast.show('At least one lot row is required for Track ID registration', 'warning');
            return;
          }
          lotRows.splice(idx, 1);
          lotRows.forEach((item, i) => { item.sNo = i + 1; });
          tableWrapper.innerHTML = buildLotsTableHtml();
          bindTableEvents();
          Toast.show('Lot row removed', 'info');
        });
      });
    };

    bindTableEvents();

    // Add New Lot Row Button
    const addLotBtn = modalEl.querySelector('#btn-add-rm-lot');
    addLotBtn?.addEventListener('click', () => {
      const nextNum = 890 + lotRows.length + 1;
      lotRows.push({
        sNo: lotRows.length + 1,
        billNo: `BILL-2026-0${nextNum}`,
        variety: 'Vannamei (White Shrimp)',
        count: 40,
        headOnWeight: 1000.00,
        recvCount: 40,
        recvWeight: 1000.00,
        sampleHoQty: 2.00,
        noOfPcs: 80
      });
      const tableWrapper = modalEl.querySelector('#rm-lots-table-wrapper');
      if (tableWrapper) {
        tableWrapper.innerHTML = buildLotsTableHtml();
        bindTableEvents();
        Toast.show('New arrival lot added to table', 'success');
      }
    });
  },

  // Show Edit RM Track ID Modal
  showEditRmTrackModal(row, container) {
    Modal.open({
      title: `Edit RM Track ID: ${row.trackId}`,
      size: 'md',
      content: `
        <form id="form-edit-rm-track" class="space-y-4" onsubmit="return false;">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <!-- 1. PRODUCTION PLANT * -->
            <div class="sm:col-span-2">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT <span class="text-[#DE350B]">*</span></label>
              <select id="erm-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="DFL UNIT-5 (JPT)" ${row.productionPlant === 'DFL UNIT-5 (JPT)' ? 'selected' : ''}>DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)" ${row.productionPlant === 'DFL UNIT-3 (PSP)' ? 'selected' : ''}>DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)" ${row.productionPlant === 'DFL UNIT-4 (PND)' ? 'selected' : ''}>DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)" ${row.productionPlant === 'DFL UNIT-1 (VSP)' ? 'selected' : ''}>DFL UNIT-1 (VSP)</option>
                <option value="DFL UNIT-6 (JPT-II)" ${row.productionPlant === 'DFL UNIT-6 (JPT-II)' ? 'selected' : ''}>DFL UNIT-6 (JPT-II)</option>
                <option value="DFL UNIT-2 (KKD)" ${row.productionPlant === 'DFL UNIT-2 (KKD)' ? 'selected' : ''}>DFL UNIT-2 (KKD)</option>
              </select>
            </div>

            <!-- 2. ARRIVAL DATE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL DATE</label>
              <div class="erp-date-wrapper">
                <input type="date" id="erm-arrival-date" value="${row.arrivalDate || '2026-10-06'}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 3. VEHICLE NUMBER * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VEHICLE NUMBER <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="erm-vehicle" value="${row.vehicleNumber || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 4. TRACK CODE FORMAT * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRACK CODE FORMAT <span class="text-[#DE350B]">*</span></label>
              <select id="erm-format" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="TRK-RM-[YYYY]-[SEQ]" ${row.trackCodeFormat === 'TRK-RM-[YYYY]-[SEQ]' ? 'selected' : ''}>TRK-RM-[YYYY]-[SEQ] (Standard)</option>
                <option value="TRK-PLANT-[CODE]-[SEQ]" ${row.trackCodeFormat === 'TRK-PLANT-[CODE]-[SEQ]' ? 'selected' : ''}>TRK-PLANT-[CODE]-[SEQ] (Plant Unique)</option>
                <option value="RFID-INTAKE-[BATCH]" ${row.trackCodeFormat === 'RFID-INTAKE-[BATCH]' ? 'selected' : ''}>RFID-INTAKE-[BATCH] (RFID Tagging)</option>
              </select>
            </div>

            <!-- 5. SEAL NUMBER * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SEAL NUMBER <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="erm-seal" value="${row.sealNumber || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#00875A] focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 6. SUPERVISOR * -->
            <div class="sm:col-span-2">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SUPERVISOR <span class="text-[#DE350B]">*</span></label>
              <select id="erm-supervisor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="Laxmi Narayana" ${row.supervisor === 'Laxmi Narayana' ? 'selected' : ''}>Laxmi Narayana</option>
                <option value="K. Subba Rao" ${row.supervisor === 'K. Subba Rao' ? 'selected' : ''}>K. Subba Rao</option>
                <option value="Ch. Prasad" ${row.supervisor === 'Ch. Prasad' ? 'selected' : ''}>Ch. Prasad</option>
                <option value="Mallesh" ${row.supervisor === 'Mallesh' ? 'selected' : ''}>Mallesh</option>
                <option value="D. Rambabu" ${row.supervisor === 'D. Rambabu' ? 'selected' : ''}>D. Rambabu</option>
                <option value="G. Suribabu" ${row.supervisor === 'G. Suribabu' ? 'selected' : ''}>G. Suribabu</option>
              </select>
            </div>

            <!-- 7. REMARKS -->
            <div class="sm:col-span-2">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">REMARKS</label>
              <textarea id="erm-remarks" rows="2" class="w-full text-xs p-2.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">${row.remarks || ''}</textarea>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        {
          label: 'Save Changes',
          type: 'primary',
          onClick: (m) => {
            const plant = document.getElementById('erm-plant')?.value || row.productionPlant;
            const arrDate = document.getElementById('erm-arrival-date')?.value || row.arrivalDate;
            const vehicle = document.getElementById('erm-vehicle')?.value || row.vehicleNumber;
            const format = document.getElementById('erm-format')?.value || row.trackCodeFormat;
            const seal = document.getElementById('erm-seal')?.value || row.sealNumber;
            const sup = document.getElementById('erm-supervisor')?.value || row.supervisor;
            const rem = document.getElementById('erm-remarks')?.value || row.remarks;

            Modal.confirm({
              title: 'Confirm Modifications',
              message: `Are you sure you want to update RM Track ID record <strong class="text-[#00A4B7]">${row.trackId}</strong>?`,
              confirmText: 'Save Changes',
              cancelText: 'Cancel',
              isDestructive: false,
              onConfirm: () => {
                row.productionPlant = plant;
                row.arrivalDate = arrDate;
                row.vehicleNumber = vehicle;
                row.trackCodeFormat = format;
                row.sealNumber = seal;
                row.supervisor = sup;
                row.remarks = rem;

                Toast.show(`RM Track ID ${row.trackId} updated successfully`, 'success');
                this.renderRmReceivedTrackIdScreen(container);
              }
            });
          }
        }
      ]
    });
  },

  // Show RM Track Details Modal (Triggered on row click)
  showRmTrackDetailsModal(row) {
    const lots = row.lots || [
      {
        sNo: 1,
        billNo: 'BILL-2026-0891',
        variety: 'Vannamei (White Shrimp)',
        count: 40,
        headOnWeight: 1250.00,
        recvCount: 42,
        recvWeight: 1242.50,
        sampleHoQty: 2.50,
        noOfPcs: 105,
        countDiff: 2.0,
        qtyDiff: -7.50
      },
      {
        sNo: 2,
        billNo: 'BILL-2026-0892',
        variety: 'Black Tiger (P. Monodon)',
        count: 30,
        headOnWeight: 850.00,
        recvCount: 30,
        recvWeight: 855.00,
        sampleHoQty: 2.00,
        noOfPcs: 60,
        countDiff: 0.0,
        qtyDiff: 5.00
      }
    ];

    let totHoWeight = 0;
    let totRecvWeight = 0;
    let totSampleQty = 0;
    let totPcs = 0;
    let totQtyDiff = 0;

    const tableRowsHtml = lots.map((l, idx) => {
      totHoWeight += Number(l.headOnWeight) || 0;
      totRecvWeight += Number(l.recvWeight) || 0;
      totSampleQty += Number(l.sampleHoQty) || 0;
      totPcs += Number(l.noOfPcs) || 0;
      totQtyDiff += Number(l.qtyDiff) || 0;

      const countDiffClass = l.countDiff === 0 ? 'text-[#00875A]' : l.countDiff > 0 ? 'text-[#0284C7]' : 'text-[#DE350B]';
      const qtyDiffClass = l.qtyDiff >= 0 ? 'text-[#00875A]' : 'text-[#DE350B]';

      return `
        <tr class="hover:bg-[#F8FAFC] transition-colors">
          <td class="py-2.5 px-3 text-center font-bold text-[#5E6C84] bg-[#FAFBFC] border-r border-[#E2E8F0]">${idx + 1}</td>
          <td class="py-2.5 px-3 font-mono font-bold text-[#00A4B7]">${l.billNo}</td>
          <td class="py-2.5 px-3 font-medium text-[#172B4D]">${l.variety}</td>
          <td class="py-2.5 px-3 text-right font-mono font-semibold">${l.count}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#0C4A6E]">${Number(l.headOnWeight).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-right font-mono font-semibold">${l.recvCount}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#00A4B7]">${Number(l.recvWeight).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#5E6C84]">${Number(l.sampleHoQty).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#5E6C84]">${l.noOfPcs}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold ${countDiffClass}">${l.countDiff > 0 ? '+' : ''}${Number(l.countDiff).toFixed(1)}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold ${qtyDiffClass}">${l.qtyDiff > 0 ? '+' : ''}${Number(l.qtyDiff).toFixed(2)} Kgs</td>
          <td class="py-2.5 px-3 text-center">
            <span class="inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E3FCEF] text-[#006644]">VERIFIED</span>
          </td>
        </tr>
      `;
    }).join('');

    Modal.open({
      title: `RM Track ID Registry: ${row.trackId}`,
      size: 'full',
      content: `
        <div class="space-y-4 text-xs">
          <!-- Key Details Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 bg-[#F8FAFC] p-3.5 rounded-xl border border-[#DFE1E6]">
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Production Plant</span>
              <span class="font-semibold text-[#172B4D] block mt-0.5">${row.productionPlant}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Vehicle Number</span>
              <span class="font-mono font-bold text-[#172B4D] block mt-0.5">${row.vehicleNumber}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Seal Number</span>
              <span class="font-mono font-bold text-[#00875A] block mt-0.5">${row.sealNumber}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Assigned Supervisor</span>
              <span class="font-medium text-[#172B4D] block mt-0.5">${row.supervisor}</span>
            </div>
          </div>

          <!-- Itemized Lots Table -->
          <div class="space-y-2">
            <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Inward Arrival Lots & Quality Inspection Specifications</h4>
            <div class="bg-white rounded-xl border border-[#DFE1E6] shadow-2xs overflow-hidden">
              <div class="overflow-x-auto" style="overflow-x: auto !important; -webkit-overflow-scrolling: touch;">
                <table class="w-full text-left text-xs border-collapse" style="min-width: 1200px;">
                  <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th class="py-2.5 px-3 w-12 text-center">S.No</th>
                      <th class="py-2.5 px-3 min-w-[130px]">Bill No</th>
                      <th class="py-2.5 px-3 min-w-[160px]">Variety</th>
                      <th class="py-2.5 px-3 min-w-[90px] text-right">Count</th>
                      <th class="py-2.5 px-3 min-w-[120px] text-right">Head on Weight</th>
                      <th class="py-2.5 px-3 min-w-[95px] text-right">Recv Count</th>
                      <th class="py-2.5 px-3 min-w-[120px] text-right">Recv Weight</th>
                      <th class="py-2.5 px-3 min-w-[110px] text-right">Sample HO Qty</th>
                      <th class="py-2.5 px-3 min-w-[90px] text-right">No Of Pcs</th>
                      <th class="py-2.5 px-3 min-w-[100px] text-right">Count Diff</th>
                      <th class="py-2.5 px-3 min-w-[110px] text-right">Qty Diff</th>
                      <th class="py-2.5 px-3 w-20 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-[#E2E8F0] text-[#1E293B]">
                    ${tableRowsHtml}
                  </tbody>
                  <tfoot class="bg-[#F8FAFC] border-t-2 border-[#DFE1E6] font-bold text-xs text-[#0F172A]">
                    <tr>
                      <td colspan="4" class="py-3 px-3 text-right uppercase tracking-wider text-[#475569]">Total Aggregates:</td>
                      <td class="py-3 px-3 text-right font-mono text-sm text-[#0C4A6E]">${totHoWeight.toFixed(2)} Kgs</td>
                      <td></td>
                      <td class="py-3 px-3 text-right font-mono text-sm text-[#00A4B7]">${totRecvWeight.toFixed(2)} Kgs</td>
                      <td class="py-3 px-3 text-right font-mono text-sm text-[#475569]">${totSampleQty.toFixed(2)} Kgs</td>
                      <td class="py-3 px-3 text-right font-mono text-sm text-[#475569]">${totPcs}</td>
                      <td></td>
                      <td class="py-3 px-3 text-right font-mono text-sm ${totQtyDiff >= 0 ? 'text-[#00875A]' : 'text-[#DE350B]'}">${totQtyDiff > 0 ? '+' : ''}${totQtyDiff.toFixed(2)} Kgs</td>
                      <td></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: (m) => m.close() }
      ]
    });
  },

    renderDeheadingTrackIdScreen(container) {
    container.innerHTML = `
      <div class="space-y-4">
        <!-- Top Action Bar (No Subheading) -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-0">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">De-Heading Track ID Log</h1>
          </div>
          <div>
            <button type="button" id="btn-gen-dh-trackid" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer border-0">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Generate De-Heading Track ID</span>
            </button>
          </div>
        </div>

        <!-- Filter Card: Exact User Application UI Style -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>

            <!-- Filter Controls: Reset & Toggle Open/Close -->
            <div class="inline-flex items-center" style="gap: 8px; display: inline-flex;">
              <button type="button" id="dhtrack-top-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-7 h-7 min-w-[28px] min-h-[28px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-none transition-colors cursor-pointer select-none" style="width: 28px; height: 28px; min-width: 28px; min-height: 28px; border-radius: 0; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Reset all filters" aria-label="Reset all filters">
                <svg class="w-4 h-4 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>

              <button type="button" id="dhtrack-top-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-7 h-7 min-w-[28px] min-h-[28px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-none transition-colors cursor-pointer select-none" style="width: 28px; height: 28px; min-width: 28px; min-height: 28px; border-radius: 0; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Hide Filter" aria-label="Hide Filter">
                <svg class="w-4 h-4 text-current dt-top-filter-toggle-icon transform transition-transform duration-200" id="dhtrack-top-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <!-- Collapsible Filter Inputs Grid (2 Balanced Rows × 4 Columns) -->
          <div id="dhtrack-top-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
            <!-- 1. PRODUCTION PLANT -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT</label>
              <select id="dht-filter-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">All Production Plants</option>
                <option value="DFL UNIT-5 (JPT)">DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
                <option value="DFL UNIT-6 (JPT-II)">DFL UNIT-6 (JPT-II)</option>
                <option value="DFL UNIT-2 (KKD)">DFL UNIT-2 (KKD)</option>
              </select>
            </div>

            <!-- 2. ARRIVAL DATE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL DATE</label>
              <div class="erp-date-wrapper">
                <input type="date" id="dht-filter-arrival-date" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 3. DE HEADING DATE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">DE HEADING DATE</label>
              <div class="erp-date-wrapper">
                <input type="date" id="dht-filter-dehead-date" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 4. SHIFT -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SHIFT</label>
              <select id="dht-filter-shift" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Shifts</option>
                <option value="Shift A (Day)">Shift A (Day)</option>
                <option value="Shift B (Evening)">Shift B (Evening)</option>
                <option value="Shift C (Night)">Shift C (Night)</option>
              </select>
            </div>

            <!-- 5. SUPERVISOR -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SUPERVISOR</label>
              <select id="dht-filter-supervisor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Supervisors</option>
                <option value="Laxmi Narayana">Laxmi Narayana</option>
                <option value="K. Subba Rao">K. Subba Rao</option>
                <option value="Ch. Prasad">Ch. Prasad</option>
                <option value="Mallesh">Mallesh</option>
                <option value="D. Rambabu">D. Rambabu</option>
                <option value="G. Suribabu">G. Suribabu</option>
              </select>
            </div>

            <!-- 6. TRACK ID SEARCH -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRACK ID</label>
              <input type="text" id="dht-filter-trackid" placeholder="Filter Track ID..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono" />
            </div>

            <!-- 7. REMARKS SEARCH -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">REMARKS</label>
              <input type="text" id="dht-filter-remarks" placeholder="Filter remarks..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 8. Search Button Slot (Compact, Natural Width) -->
            <div class="flex items-end">
              <button type="button" id="dht-filter-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Table Container -->
        <div id="dh-trackid-table-container"></div>
      </div>
    `;

    // Button Generate Handler
    document.getElementById('btn-gen-dh-trackid')?.addEventListener('click', () => {
      this.showGenerateDeheadingTrackModal(container);
    });

    // Toggle filter open/close handler
    const toggleBtn = document.getElementById('dhtrack-top-toggle-btn');
    toggleBtn?.addEventListener('click', () => {
      const body = document.getElementById('dhtrack-top-filter-body');
      const icon = document.getElementById('dhtrack-top-toggle-icon');
      if (body) {
        body.classList.toggle('hidden');
        if (body.classList.contains('hidden')) {
          toggleBtn.title = 'Show Filter';
          icon?.classList.add('-rotate-90');
        } else {
          toggleBtn.title = 'Hide Filter';
          icon?.classList.remove('-rotate-90');
        }
      }
    });

    // Reset filter handler
    const resetBtn = document.getElementById('dhtrack-top-reset-btn');
    resetBtn?.addEventListener('click', () => {
      if (document.getElementById('dht-filter-plant')) document.getElementById('dht-filter-plant').value = 'ALL';
      if (document.getElementById('dht-filter-arrival-date')) document.getElementById('dht-filter-arrival-date').value = '';
      if (document.getElementById('dht-filter-dehead-date')) document.getElementById('dht-filter-dehead-date').value = '';
      if (document.getElementById('dht-filter-shift')) document.getElementById('dht-filter-shift').value = 'ALL';
      if (document.getElementById('dht-filter-supervisor')) document.getElementById('dht-filter-supervisor').value = 'ALL';
      if (document.getElementById('dht-filter-trackid')) document.getElementById('dht-filter-trackid').value = '';
      if (document.getElementById('dht-filter-remarks')) document.getElementById('dht-filter-remarks').value = '';

      renderTable(this.state.deheadingTrackIds);
      Toast.show('Filters reset', 'info');
    });

    // Table render function
    const renderTable = (data) => {
      new DataTable({
        containerId: 'dh-trackid-table-container',
        data: data,
        keyField: 'trackId',
        tableTitle: 'De-Heading Crate Tracking Log',
        searchable: true,
        exportable: true,
        pageSize: 10,
        columns: [
          // 1. S.No
          {
            field: 'sNo',
            header: 'S.No',
            render: (v, row, idx) => `<span class="text-[#5E6C84] font-semibold">${v || (idx + 1)}</span>`
          },
          // 2. Track ID
          {
            field: 'trackId',
            header: 'Track ID',
            render: (v) => `<span class="font-mono font-bold text-[#00A4B7] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BAE6FD] whitespace-nowrap">${v}</span>`
          },
          // 3. Production Plant
          {
            field: 'productionPlant',
            header: 'Production Plant',
            render: (v) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 4. Arrival Date
          {
            field: 'arrivalDate',
            header: 'Arrival Date',
            render: (v) => `<span class="text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 5. De Heading Date
          {
            field: 'deheadingDate',
            header: 'De Heading Date',
            render: (v) => `<span class="text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 6. Shift
          {
            field: 'shift',
            header: 'Shift',
            render: (v) => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F4F5F7] text-[#42526E] border border-[#DFE1E6] whitespace-nowrap">${v}</span>`
          },
          // 7. Supervisor
          {
            field: 'supervisor',
            header: 'Supervisor',
            render: (v) => `<span class="font-medium text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 8. Remarks
          {
            field: 'remarks',
            header: 'Remarks',
            render: (v) => `<span class="text-xs text-[#5E6C84] truncate max-w-[220px] block" title="${v}">${v}</span>`
          }
          // 9. Actions (automatically appended and centered)
        ],
        actions: [
          {
            label: 'Edit',
            icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: (row) => this.showEditDeheadingTrackModal(row, container)
          },
          {
            label: 'Delete',
            icon: `<svg class="w-4 h-4 text-[#FF5630]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Delete De-Heading Track ID',
                message: `Are you sure you want to delete De-Heading Track ID <strong class="text-[#00A4B7]">${row.trackId}</strong>? This action cannot be undone.`,
                confirmText: 'Yes, Delete',
                cancelText: 'Cancel',
                isDestructive: true,
                onConfirm: () => {
                  const idx = this.state.deheadingTrackIds.findIndex(r => r.id === row.id || r.trackId === row.trackId);
                  if (idx !== -1) {
                    this.state.deheadingTrackIds.splice(idx, 1);
                    renderTable(this.state.deheadingTrackIds);
                    Toast.show(`De-Heading Track ID ${row.trackId} deleted`, 'info');
                  }
                }
              });
            }
          }
        ],
        onRowClick: (row) => this.showDeheadingTrackDetailsModal(row)
      });
    };

    renderTable(this.state.deheadingTrackIds);

    // Search button event binding
    const searchBtn = document.getElementById('dht-filter-search-btn');
    searchBtn?.addEventListener('click', () => {
      const plantVal = document.getElementById('dht-filter-plant')?.value || 'ALL';
      const arrDateVal = document.getElementById('dht-filter-arrival-date')?.value || '';
      const dhDateVal = document.getElementById('dht-filter-dehead-date')?.value || '';
      const shiftVal = document.getElementById('dht-filter-shift')?.value || 'ALL';
      const supVal = document.getElementById('dht-filter-supervisor')?.value || 'ALL';
      const trackIdVal = (document.getElementById('dht-filter-trackid')?.value || '').toLowerCase().trim();
      const remarksVal = (document.getElementById('dht-filter-remarks')?.value || '').toLowerCase().trim();

      const filtered = this.state.deheadingTrackIds.filter(r => {
        if (plantVal !== 'ALL' && r.productionPlant !== plantVal) return false;
        if (arrDateVal && r.arrivalDate && !r.arrivalDate.includes(arrDateVal)) return false;
        if (dhDateVal && r.deheadingDate && !r.deheadingDate.includes(dhDateVal)) return false;
        if (shiftVal !== 'ALL' && r.shift !== shiftVal) return false;
        if (supVal !== 'ALL' && r.supervisor !== supVal) return false;
        if (trackIdVal && !String(r.trackId).toLowerCase().includes(trackIdVal)) return false;
        if (remarksVal && !String(r.remarks).toLowerCase().includes(remarksVal)) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Applied filters: ${filtered.length} deheading track record(s) matched`, 'info');
    });
  },

  // Show Generate De-Heading Track ID Modal
  showGenerateDeheadingTrackModal(container) {
    Modal.open({
      title: 'Generate De-Heading Track ID',
      size: 'md',
      content: `
        <form id="form-gen-dh-track" class="space-y-4" onsubmit="return false;">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <!-- 1. PRODUCTION PLANT * -->
            <div class="sm:col-span-2">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT <span class="text-[#DE350B]">*</span></label>
              <select id="ndht-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="DFL UNIT-5 (JPT)" selected>DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
                <option value="DFL UNIT-6 (JPT-II)">DFL UNIT-6 (JPT-II)</option>
                <option value="DFL UNIT-2 (KKD)">DFL UNIT-2 (KKD)</option>
              </select>
            </div>

            <!-- 2. ARRIVAL DATE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" id="ndht-arrival-date" value="2026-10-07" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 3. TRACK ID * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRACK ID <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="ndht-trackid" value="TRK-DH-2026-${Math.floor(910 + Math.random() * 80)}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#0284C7]" placeholder="e.g. TRK-DH-2026-910" />
            </div>

            <!-- 4. DE HEADING DATE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">DE HEADING DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" id="ndht-dehead-date" value="2026-10-07" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 5. SHIFT * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SHIFT <span class="text-[#DE350B]">*</span></label>
              <select id="ndht-shift" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="Shift A (Day)" selected>Shift A (Day)</option>
                <option value="Shift B (Evening)">Shift B (Evening)</option>
                <option value="Shift C (Night)">Shift C (Night)</option>
              </select>
            </div>

            <!-- 6. SUPERVISOR * -->
            <div class="sm:col-span-2">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SUPERVISOR <span class="text-[#DE350B]">*</span></label>
              <select id="ndht-supervisor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="Laxmi Narayana" selected>Laxmi Narayana</option>
                <option value="K. Subba Rao">K. Subba Rao</option>
                <option value="Ch. Prasad">Ch. Prasad</option>
                <option value="Mallesh">Mallesh</option>
                <option value="D. Rambabu">D. Rambabu</option>
                <option value="G. Suribabu">G. Suribabu</option>
              </select>
            </div>

            <!-- 7. REMARKS -->
            <div class="sm:col-span-2">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">REMARKS</label>
              <textarea id="ndht-remarks" rows="2" class="w-full text-xs p-2.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" placeholder="Deheading yield verification & cutting line pass...">Standard cutting table yield verified, cold chain continuous.</textarea>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        {
          label: 'Generate & Register',
          type: 'primary',
          onClick: (m) => {
            const plant = document.getElementById('ndht-plant')?.value || 'DFL UNIT-5 (JPT)';
            const arrDate = document.getElementById('ndht-arrival-date')?.value || '2026-10-07';
            const trackId = document.getElementById('ndht-trackid')?.value || `TRK-DH-2026-${Math.floor(920 + Math.random() * 70)}`;
            const dhDate = document.getElementById('ndht-dehead-date')?.value || '2026-10-07';
            const shift = document.getElementById('ndht-shift')?.value || 'Shift A (Day)';
            const sup = document.getElementById('ndht-supervisor')?.value || 'Laxmi Narayana';
            const rem = document.getElementById('ndht-remarks')?.value || 'Deheading lot registered';

            Modal.confirm({
              title: 'Confirm De-Heading Track ID Generation',
              message: `Are you sure you want to generate De-Heading Track ID <strong class="text-[#00A4B7]">${trackId}</strong> for <strong>${plant}</strong> (${shift})?`,
              confirmText: 'Yes, Generate Track ID',
              cancelText: 'Cancel',
              isDestructive: false,
              onConfirm: () => {
                const newEntry = {
                  sNo: 1,
                  id: trackId,
                  trackId: trackId,
                  productionPlant: plant,
                  arrivalDate: arrDate,
                  deheadingDate: dhDate,
                  shift: shift,
                  supervisor: sup,
                  remarks: rem,
                  status: 'ACTIVE'
                };

                this.state.deheadingTrackIds.forEach(r => { if (r.sNo) r.sNo += 1; });
                this.state.deheadingTrackIds.unshift(newEntry);

                Toast.show(`De-Heading Track ID ${trackId} generated successfully`, 'success', 'Track ID Registered');
                this.renderDeheadingTrackIdScreen(container);
              }
            });
          }
        }
      ]
    });
  },

  // Show Edit De-Heading Track ID Modal
  showEditDeheadingTrackModal(row, container) {
    Modal.open({
      title: `Edit De-Heading Track ID: ${row.trackId}`,
      size: 'md',
      content: `
        <form id="form-edit-dh-track" class="space-y-4" onsubmit="return false;">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <!-- 1. PRODUCTION PLANT * -->
            <div class="sm:col-span-2">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT <span class="text-[#DE350B]">*</span></label>
              <select id="edht-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="DFL UNIT-5 (JPT)" ${row.productionPlant === 'DFL UNIT-5 (JPT)' ? 'selected' : ''}>DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)" ${row.productionPlant === 'DFL UNIT-3 (PSP)' ? 'selected' : ''}>DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)" ${row.productionPlant === 'DFL UNIT-4 (PND)' ? 'selected' : ''}>DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)" ${row.productionPlant === 'DFL UNIT-1 (VSP)' ? 'selected' : ''}>DFL UNIT-1 (VSP)</option>
                <option value="DFL UNIT-6 (JPT-II)" ${row.productionPlant === 'DFL UNIT-6 (JPT-II)' ? 'selected' : ''}>DFL UNIT-6 (JPT-II)</option>
                <option value="DFL UNIT-2 (KKD)" ${row.productionPlant === 'DFL UNIT-2 (KKD)' ? 'selected' : ''}>DFL UNIT-2 (KKD)</option>
              </select>
            </div>

            <!-- 2. ARRIVAL DATE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" id="edht-arrival-date" value="${row.arrivalDate || '2026-10-06'}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 3. TRACK ID * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRACK ID <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="edht-trackid" value="${row.trackId || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 4. DE HEADING DATE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">DE HEADING DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" id="edht-dehead-date" value="${row.deheadingDate || '2026-10-06'}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 5. SHIFT * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SHIFT <span class="text-[#DE350B]">*</span></label>
              <select id="edht-shift" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="Shift A (Day)" ${row.shift === 'Shift A (Day)' ? 'selected' : ''}>Shift A (Day)</option>
                <option value="Shift B (Evening)" ${row.shift === 'Shift B (Evening)' ? 'selected' : ''}>Shift B (Evening)</option>
                <option value="Shift C (Night)" ${row.shift === 'Shift C (Night)' ? 'selected' : ''}>Shift C (Night)</option>
              </select>
            </div>

            <!-- 6. SUPERVISOR * -->
            <div class="sm:col-span-2">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SUPERVISOR <span class="text-[#DE350B]">*</span></label>
              <select id="edht-supervisor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="Laxmi Narayana" ${row.supervisor === 'Laxmi Narayana' ? 'selected' : ''}>Laxmi Narayana</option>
                <option value="K. Subba Rao" ${row.supervisor === 'K. Subba Rao' ? 'selected' : ''}>K. Subba Rao</option>
                <option value="Ch. Prasad" ${row.supervisor === 'Ch. Prasad' ? 'selected' : ''}>Ch. Prasad</option>
                <option value="Mallesh" ${row.supervisor === 'Mallesh' ? 'selected' : ''}>Mallesh</option>
                <option value="D. Rambabu" ${row.supervisor === 'D. Rambabu' ? 'selected' : ''}>D. Rambabu</option>
                <option value="G. Suribabu" ${row.supervisor === 'G. Suribabu' ? 'selected' : ''}>G. Suribabu</option>
              </select>
            </div>

            <!-- 7. REMARKS -->
            <div class="sm:col-span-2">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">REMARKS</label>
              <textarea id="edht-remarks" rows="2" class="w-full text-xs p-2.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">${row.remarks || ''}</textarea>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        {
          label: 'Save Changes',
          type: 'primary',
          onClick: (m) => {
            const plant = document.getElementById('edht-plant')?.value || row.productionPlant;
            const arrDate = document.getElementById('edht-arrival-date')?.value || row.arrivalDate;
            const trackId = document.getElementById('edht-trackid')?.value || row.trackId;
            const dhDate = document.getElementById('edht-dehead-date')?.value || row.deheadingDate;
            const shift = document.getElementById('edht-shift')?.value || row.shift;
            const sup = document.getElementById('edht-supervisor')?.value || row.supervisor;
            const rem = document.getElementById('edht-remarks')?.value || row.remarks;

            Modal.confirm({
              title: 'Confirm Modifications',
              message: `Are you sure you want to update De-Heading Track ID <strong class="text-[#00A4B7]">${trackId}</strong>?`,
              confirmText: 'Save Changes',
              cancelText: 'Cancel',
              isDestructive: false,
              onConfirm: () => {
                row.productionPlant = plant;
                row.arrivalDate = arrDate;
                row.trackId = trackId;
                row.id = trackId;
                row.deheadingDate = dhDate;
                row.shift = shift;
                row.supervisor = sup;
                row.remarks = rem;

                Toast.show(`De-Heading Track ID ${row.trackId} updated successfully`, 'success');
                this.renderDeheadingTrackIdScreen(container);
              }
            });
          }
        }
      ]
    });
  },

  // Show De-Heading Track Details Modal (Triggered on row click)
  showDeheadingTrackDetailsModal(row) {
    Modal.open({
      title: `De-Heading Track ID Details: ${row.trackId}`,
      size: 'md',
      content: `
        <div class="space-y-4 text-xs">
          <!-- Top summary badge card -->
          <div class="bg-[#F0F9FF] border border-[#BAE6FD] rounded-lg p-3.5 flex items-center justify-between">
            <div>
              <span class="text-[11px] font-bold text-[#0284C7] uppercase tracking-wider block">De-Heading Track Code</span>
              <span class="text-base font-mono font-bold text-[#0C4A6E] mt-0.5 block">${row.trackId}</span>
            </div>
            <div class="text-right">
              <span class="lozenge lozenge-success">STATUS ACTIVE</span>
              <span class="text-[11px] text-[#5E6C84] block mt-1">${row.deheadingDate}</span>
            </div>
          </div>

          <!-- Key Details Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#F4F5F7] p-3 rounded-lg border border-[#DFE1E6]">
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Production Plant</span>
              <span class="font-semibold text-[#172B4D] block mt-0.5">${row.productionPlant}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Arrival Date</span>
              <span class="font-medium text-[#172B4D] block mt-0.5">${row.arrivalDate}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">De Heading Date</span>
              <span class="font-medium text-[#172B4D] block mt-0.5">${row.deheadingDate}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Processing Shift</span>
              <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-white border border-[#DFE1E6] text-[#42526E] inline-block mt-0.5">${row.shift}</span>
            </div>
            <div class="sm:col-span-2">
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Assigned Supervisor</span>
              <span class="font-medium text-[#172B4D] block mt-0.5">${row.supervisor}</span>
            </div>
            <div class="sm:col-span-2">
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Operational Remarks</span>
              <span class="text-[#334155] block mt-0.5 bg-white p-2 rounded border border-[#DFE1E6]">${row.remarks || 'No remarks recorded'}</span>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: (m) => m.close() }
      ]
    });
  },

  // =========================================================================
  // SCREEN 6: GRADING TRACKID (OPERATIONS TAB 5)
  // =========================================================================
  renderGradingTrackIdScreen(container) {
    container.innerHTML = `
      <div class="space-y-4">
        <!-- Top Action Bar (No Subheading) -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-0">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">Grading Track ID</h1>
          </div>
          <div>
            <button type="button" id="btn-gen-gr-trackid" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer border-0">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Generate Grading Track ID</span>
            </button>
          </div>
        </div>

        <!-- Filter Card: Exact User Application UI Style (2 Balanced Rows × 4 Columns) -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>

            <!-- Filter Controls: Reset & Toggle Open/Close -->
            <div class="inline-flex items-center" style="gap: 8px; display: inline-flex;">
              <button type="button" id="grtrack-top-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-7 h-7 min-w-[28px] min-h-[28px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-none transition-colors cursor-pointer select-none" style="width: 28px; height: 28px; min-width: 28px; min-height: 28px; border-radius: 0; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Reset all filters" aria-label="Reset all filters">
                <svg class="w-4 h-4 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>

              <button type="button" id="grtrack-top-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-7 h-7 min-w-[28px] min-h-[28px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-none transition-colors cursor-pointer select-none" style="width: 28px; height: 28px; min-width: 28px; min-height: 28px; border-radius: 0; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Hide Filter" aria-label="Hide Filter">
                <svg class="w-4 h-4 text-current dt-top-filter-toggle-icon transform transition-transform duration-200" id="grtrack-top-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <!-- Collapsible Filter Inputs Grid (2 Balanced Rows × 4 Columns) -->
          <div id="grtrack-top-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
            <!-- 1. PRODUCTION PLANT -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT</label>
              <select id="grt-filter-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">All Production Plants</option>
                <option value="DFL UNIT-5 (JPT)">DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
                <option value="DFL UNIT-6 (JPT-II)">DFL UNIT-6 (JPT-II)</option>
                <option value="DFL UNIT-2 (KKD)">DFL UNIT-2 (KKD)</option>
              </select>
            </div>

            <!-- 2. ARRIVAL DATE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL DATE</label>
              <div class="erp-date-wrapper">
                <input type="date" id="grt-filter-arrival-date" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 3. GRADING DATE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GRADING DATE</label>
              <div class="erp-date-wrapper">
                <input type="date" id="grt-filter-grading-date" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 4. GRADING MACHINE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GRADING MACHINE</label>
              <select id="grt-filter-machine" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Machines</option>
                <option value="Auto Grader #1">Auto Grader #1</option>
                <option value="Auto Grader #2">Auto Grader #2</option>
                <option value="Auto Grader #3">Auto Grader #3</option>
                <option value="Manual Sizer #2">Manual Sizer #2</option>
              </select>
            </div>

            <!-- 5. TRACK ID -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRACK ID</label>
              <input type="text" id="grt-filter-trackid" placeholder="Filter Track ID..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono" />
            </div>

            <!-- 6. VARIETY -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VARIETY</label>
              <select id="grt-filter-variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Varieties</option>
                <option value="Vannamei (VM)">Vannamei (VM)</option>
                <option value="Black Tiger (BT)">Black Tiger (BT)</option>
                <option value="Asian Seabass">Asian Seabass</option>
              </select>
            </div>

            <!-- 7. GRADE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GRADE</label>
              <select id="grt-filter-grade" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Grades</option>
                <option value="21/25">21/25</option>
                <option value="16/20">16/20</option>
                <option value="26/30">26/30</option>
                <option value="13/15">13/15</option>
                <option value="31/40">31/40</option>
                <option value="300-500g">300-500g</option>
              </select>
            </div>

            <!-- 8. Search Button Slot (Compact, Natural Width) -->
            <div class="flex items-end">
              <button type="button" id="grt-filter-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Data Table Container -->
        <div id="grading-trackid-table-container"></div>
      </div>
    `;

    // Button Generate Handler
    document.getElementById('btn-gen-gr-trackid')?.addEventListener('click', () => {
      this.showGenerateGradingTrackModal(container);
    });

    // Toggle filter open/close handler
    const toggleBtn = document.getElementById('grtrack-top-toggle-btn');
    toggleBtn?.addEventListener('click', () => {
      const body = document.getElementById('grtrack-top-filter-body');
      const icon = document.getElementById('grtrack-top-toggle-icon');
      if (body) {
        body.classList.toggle('hidden');
        if (body.classList.contains('hidden')) {
          toggleBtn.title = 'Show Filter';
          icon?.classList.add('-rotate-90');
        } else {
          toggleBtn.title = 'Hide Filter';
          icon?.classList.remove('-rotate-90');
        }
      }
    });

    // Reset filter handler
    const resetBtn = document.getElementById('grtrack-top-reset-btn');
    resetBtn?.addEventListener('click', () => {
      if (document.getElementById('grt-filter-plant')) document.getElementById('grt-filter-plant').value = 'ALL';
      if (document.getElementById('grt-filter-arrival-date')) document.getElementById('grt-filter-arrival-date').value = '';
      if (document.getElementById('grt-filter-grading-date')) document.getElementById('grt-filter-grading-date').value = '';
      if (document.getElementById('grt-filter-machine')) document.getElementById('grt-filter-machine').value = 'ALL';
      if (document.getElementById('grt-filter-trackid')) document.getElementById('grt-filter-trackid').value = '';
      if (document.getElementById('grt-filter-variety')) document.getElementById('grt-filter-variety').value = 'ALL';
      if (document.getElementById('grt-filter-grade')) document.getElementById('grt-filter-grade').value = 'ALL';

      renderTable(this.state.gradingTrackIds);
      Toast.show('Filters reset', 'info');
    });

    // Main Table render function
    const renderTable = (data) => {
      new DataTable({
        containerId: 'grading-trackid-table-container',
        data: data,
        keyField: 'trackId',
        tableTitle: 'Grading Track ID Registry',
        searchable: true,
        exportable: true,
        pageSize: 10,
        columns: [
          // 1. SNO
          {
            field: 'sNo',
            header: 'SNO',
            render: (v, row, idx) => `<span class="text-[#5E6C84] font-semibold">${v || (idx + 1)}</span>`
          },
          // Track ID (essential for identification)
          {
            field: 'trackId',
            header: 'Track ID',
            render: (v) => `<span class="font-mono font-bold text-[#00A4B7] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BAE6FD] whitespace-nowrap">${v}</span>`
          },
          // 2. Variety
          {
            field: 'variety',
            header: 'Variety',
            render: (v) => `<span class="font-bold text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 3. HL_Count (Per Lb)
          {
            field: 'hlCount',
            header: 'HL_Count (Per Lb)',
            render: (v) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 4. Grade
          {
            field: 'grade',
            header: 'Grade',
            render: (v) => `<span class="font-extrabold text-xs px-2.5 py-0.5 rounded bg-[#EBF8FF] text-[#0284C7] border border-[#BAE6FD] whitespace-nowrap">${v}</span>`
          },
          // 5. Treatment
          {
            field: 'treatment',
            header: 'Treatment',
            render: (v) => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F4F5F7] text-[#42526E] border border-[#DFE1E6] whitespace-nowrap">${v}</span>`
          },
          // 6. Freezing
          {
            field: 'freezing',
            header: 'Freezing',
            render: (v) => `<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#E6FCFF] text-[#008DA6] border border-[#B6F0F7] whitespace-nowrap">${v}</span>`
          },
          // 7. No Of Crates
          {
            field: 'noOfCrates',
            header: 'No Of Crates',
            render: (v) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${v} Crates</span>`
          },
          // 8. Grading Qty
          {
            field: 'gradingQty',
            header: 'Grading Qty',
            render: (v) => `<span class="font-bold text-[#00875A] whitespace-nowrap">${Number(v).toLocaleString()} KG</span>`
          },
          // 9. HL/Tub Weight
          {
            field: 'hlTubWeight',
            header: 'HL/Tub Weight',
            render: (v) => `<span class="font-medium text-[#172B4D] whitespace-nowrap">${v} KG</span>`
          }
          // 10. Actions (appended and centered)
        ],
        actions: [
          {
            label: 'Edit',
            icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: (row) => this.showEditGradingTrackModal(row, container)
          },
          {
            label: 'Delete',
            icon: `<svg class="w-4 h-4 text-[#FF5630]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Delete Grading Track ID',
                message: `Are you sure you want to delete Grading Track ID <strong class="text-[#00A4B7]">${row.trackId}</strong>? This action cannot be undone.`,
                confirmText: 'Yes, Delete',
                cancelText: 'Cancel',
                isDestructive: true,
                onConfirm: () => {
                  const idx = this.state.gradingTrackIds.findIndex(r => r.id === row.id || r.trackId === row.trackId);
                  if (idx !== -1) {
                    this.state.gradingTrackIds.splice(idx, 1);
                    renderTable(this.state.gradingTrackIds);
                    Toast.show(`Grading Track ID ${row.trackId} deleted`, 'info');
                  }
                }
              });
            }
          }
        ],
        onRowClick: (row) => this.showGradingTrackDetailsModal(row)
      });
    };

    renderTable(this.state.gradingTrackIds);

    // Search button event binding
    const searchBtn = document.getElementById('grt-filter-search-btn');
    searchBtn?.addEventListener('click', () => {
      const plantVal = document.getElementById('grt-filter-plant')?.value || 'ALL';
      const arrDateVal = document.getElementById('grt-filter-arrival-date')?.value || '';
      const grDateVal = document.getElementById('grt-filter-grading-date')?.value || '';
      const machineVal = document.getElementById('grt-filter-machine')?.value || 'ALL';
      const trackIdVal = (document.getElementById('grt-filter-trackid')?.value || '').toLowerCase().trim();
      const varietyVal = document.getElementById('grt-filter-variety')?.value || 'ALL';
      const gradeVal = document.getElementById('grt-filter-grade')?.value || 'ALL';

      const filtered = this.state.gradingTrackIds.filter(r => {
        if (plantVal !== 'ALL' && r.productionPlant !== plantVal) return false;
        if (arrDateVal && r.arrivalDate && !r.arrivalDate.includes(arrDateVal)) return false;
        if (grDateVal && r.gradingDate && !r.gradingDate.includes(grDateVal)) return false;
        if (machineVal !== 'ALL' && r.gradingMachine !== machineVal) return false;
        if (trackIdVal && !String(r.trackId).toLowerCase().includes(trackIdVal)) return false;
        if (varietyVal !== 'ALL' && r.variety !== varietyVal) return false;
        if (gradeVal !== 'ALL' && !String(r.grade).includes(gradeVal)) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Applied filters: ${filtered.length} grading track record(s) matched`, 'info');
    });
  },

  // Show Generate Grading Track ID Modal
  showGenerateGradingTrackModal(container) {
    const nextTrackId = `TRK-GR-2026-${Math.floor(710 + Math.random() * 80)}`;
    
    // Initial crate row data for the embedded table
    let modalCrateRows = [
      {
        sNo: 1,
        variety: 'Vannamei (VM)',
        hlCount: '21/25',
        grade: 'Grade 1 (21/25)',
        treatment: 'Non-Phosphate',
        freezing: 'IQF Frozen',
        noOfCrates: 25,
        gradingQty: 500.0,
        hlTubWeight: 20.0
      }
    ];

    const renderModalCrateTable = () => {
      const tbody = document.getElementById('modal-crate-tbody');
      if (!tbody) return;
      tbody.innerHTML = modalCrateRows.map((item, idx) => `
        <tr class="hover:bg-[#F9FAFB] transition-colors border-b border-[#EBECF0]">
          <td class="px-2.5 py-2 text-center text-[#5E6C84] font-semibold">${idx + 1}</td>
          <td class="px-2.5 py-2">
            <select data-idx="${idx}" data-field="variety" class="mcr-input w-full text-xs px-2 py-1 bg-white border border-[#DFE1E6] rounded">
              <option value="Vannamei (VM)" ${item.variety === 'Vannamei (VM)' ? 'selected' : ''}>Vannamei (VM)</option>
              <option value="Black Tiger (BT)" ${item.variety === 'Black Tiger (BT)' ? 'selected' : ''}>Black Tiger (BT)</option>
              <option value="Asian Seabass" ${item.variety === 'Asian Seabass' ? 'selected' : ''}>Asian Seabass</option>
            </select>
          </td>
          <td class="px-2.5 py-2">
            <input type="text" data-idx="${idx}" data-field="hlCount" value="${item.hlCount}" class="mcr-input w-full text-xs px-2 py-1 bg-white border border-[#DFE1E6] rounded" />
          </td>
          <td class="px-2.5 py-2">
            <input type="text" data-idx="${idx}" data-field="grade" value="${item.grade}" class="mcr-input w-full text-xs px-2 py-1 bg-white border border-[#DFE1E6] rounded" />
          </td>
          <td class="px-2.5 py-2">
            <select data-idx="${idx}" data-field="treatment" class="mcr-input w-full text-xs px-2 py-1 bg-white border border-[#DFE1E6] rounded">
              <option value="Non-Phosphate" ${item.treatment === 'Non-Phosphate' ? 'selected' : ''}>Non-Phosphate</option>
              <option value="Fresh Raw" ${item.treatment === 'Fresh Raw' ? 'selected' : ''}>Fresh Raw</option>
              <option value="STPP Treated" ${item.treatment === 'STPP Treated' ? 'selected' : ''}>STPP Treated</option>
              <option value="Chilled Salt Slurry" ${item.treatment === 'Chilled Salt Slurry' ? 'selected' : ''}>Chilled Salt Slurry</option>
            </select>
          </td>
          <td class="px-2.5 py-2">
            <select data-idx="${idx}" data-field="freezing" class="mcr-input w-full text-xs px-2 py-1 bg-white border border-[#DFE1E6] rounded">
              <option value="IQF Frozen" ${item.freezing === 'IQF Frozen' ? 'selected' : ''}>IQF Frozen</option>
              <option value="Block Frozen" ${item.freezing === 'Block Frozen' ? 'selected' : ''}>Block Frozen</option>
              <option value="Semi-IQF" ${item.freezing === 'Semi-IQF' ? 'selected' : ''}>Semi-IQF</option>
              <option value="Blast Freezing" ${item.freezing === 'Blast Freezing' ? 'selected' : ''}>Blast Freezing</option>
            </select>
          </td>
          <td class="px-2.5 py-2 text-right">
            <input type="number" data-idx="${idx}" data-field="noOfCrates" value="${item.noOfCrates}" class="mcr-input w-16 text-xs px-2 py-1 bg-white border border-[#DFE1E6] rounded text-right" />
          </td>
          <td class="px-2.5 py-2 text-right">
            <input type="number" data-idx="${idx}" data-field="gradingQty" value="${item.gradingQty}" class="mcr-input w-20 text-xs px-2 py-1 bg-white border border-[#DFE1E6] rounded text-right font-bold text-[#00875A]" />
          </td>
          <td class="px-2.5 py-2 text-right">
            <input type="number" step="0.1" data-idx="${idx}" data-field="hlTubWeight" value="${item.hlTubWeight}" class="mcr-input w-16 text-xs px-2 py-1 bg-white border border-[#DFE1E6] rounded text-right" />
          </td>
          <td class="px-2.5 py-2 text-center">
            <button type="button" data-idx="${idx}" class="btn-del-modal-crate-row p-1 text-[#FF5630] hover:bg-[#FFEBE6] rounded transition-colors" title="Remove Row">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </td>
        </tr>
      `).join('');

      // Bind input changes
      document.querySelectorAll('.mcr-input').forEach(input => {
        input.addEventListener('change', (e) => {
          const idx = parseInt(e.target.dataset.idx, 10);
          const field = e.target.dataset.field;
          let val = e.target.value;
          if (field === 'noOfCrates') val = parseInt(val, 10) || 0;
          if (field === 'gradingQty' || field === 'hlTubWeight') val = parseFloat(val) || 0;
          modalCrateRows[idx][field] = val;
        });
      });

      // Bind delete row
      document.querySelectorAll('.btn-del-modal-crate-row').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const idx = parseInt(btn.closest('button').dataset.idx, 10);
          if (modalCrateRows.length <= 1) {
            Toast.show('At least one crate table entry is required', 'warning');
            return;
          }
          modalCrateRows.splice(idx, 1);
          renderModalCrateTable();
        });
      });
    };

    Modal.open({
      title: 'Generate Grading Track ID',
      size: 'xl',
      content: `
        <form id="form-gen-gr-track" class="space-y-4" onsubmit="return false;">
          <!-- 11 Form Input Fields -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
            <!-- 1. PRODUCTION PLANT * -->
            <div class="sm:col-span-2">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT <span class="text-[#DE350B]">*</span></label>
              <select id="ngrt-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="DFL UNIT-5 (JPT)" selected>DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
                <option value="DFL UNIT-6 (JPT-II)">DFL UNIT-6 (JPT-II)</option>
                <option value="DFL UNIT-2 (KKD)">DFL UNIT-2 (KKD)</option>
              </select>
            </div>

            <!-- 2. ARRIVAL DATE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" id="ngrt-arrival-date" value="2026-10-07" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 3. TRACK ID * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRACK ID <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="ngrt-trackid" value="${nextTrackId}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 4. RECEIVING COUNT * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">RECEIVING COUNT <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="ngrt-receiving-count" value="42 Count" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 5. GRADING DATE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GRADING DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" id="ngrt-grading-date" value="2026-10-07" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 6. GRADING MACHINE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GRADING MACHINE <span class="text-[#DE350B]">*</span></label>
              <select id="ngrt-grading-machine" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="Auto Grader #1" selected>Auto Grader #1</option>
                <option value="Auto Grader #2">Auto Grader #2</option>
                <option value="Auto Grader #3">Auto Grader #3</option>
                <option value="Manual Sizer #2">Manual Sizer #2</option>
              </select>
            </div>

            <!-- 7. START TIME -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">START TIME</label>
              <input type="time" id="ngrt-start-time" value="08:30" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 8. END TIME -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">END TIME</label>
              <input type="time" id="ngrt-end-time" value="12:00" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 9. BREAK TIME(MINUTES) -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BREAK TIME(MINUTES)</label>
              <input type="number" id="ngrt-break-time" value="30" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 10. SUPERVISOR * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SUPERVISOR <span class="text-[#DE350B]">*</span></label>
              <select id="ngrt-supervisor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="Laxmi Narayana" selected>Laxmi Narayana</option>
                <option value="K. Subba Rao">K. Subba Rao</option>
                <option value="Ch. Prasad">Ch. Prasad</option>
                <option value="Mallesh">Mallesh</option>
                <option value="D. Rambabu">D. Rambabu</option>
                <option value="G. Suribabu">G. Suribabu</option>
              </select>
            </div>

            <!-- 11. REMARKS -->
            <div class="sm:col-span-2 md:col-span-3 lg:col-span-4">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">REMARKS</label>
              <input type="text" id="ngrt-remarks" value="Standard sizing calibration verified" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>
          </div>

          <!-- Embedded Crate Table: Exact Data Table Columns -->
          <div class="mt-4 pt-3 border-t border-[#EBECF0]">
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Crate / Grade Allocation Table</h4>
              <button type="button" id="btn-add-modal-crate-row" class="btn-primary px-3 py-1 rounded text-[11px] font-semibold flex items-center gap-1 border-0 cursor-pointer">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                <span>Add Crate Row</span>
              </button>
            </div>
            
            <div class="overflow-x-auto border border-[#DFE1E6] rounded-lg">
              <table class="w-full text-xs text-left border-collapse">
                <thead class="bg-[#FAFBFC] border-b border-[#EBECF0] text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider whitespace-nowrap">
                  <tr>
                    <th class="px-2.5 py-2 text-center">SNO</th>
                    <th class="px-2.5 py-2">Variety</th>
                    <th class="px-2.5 py-2">HL_Count (Per Lb)</th>
                    <th class="px-2.5 py-2">Grade</th>
                    <th class="px-2.5 py-2">Treatment</th>
                    <th class="px-2.5 py-2">Freezing</th>
                    <th class="px-2.5 py-2 text-right">No Of Crates</th>
                    <th class="px-2.5 py-2 text-right">Grading Qty</th>
                    <th class="px-2.5 py-2 text-right">HL/Tub Weight</th>
                    <th class="px-2.5 py-2 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody id="modal-crate-tbody" class="divide-y divide-[#EBECF0] bg-white">
                </tbody>
              </table>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        {
          label: 'Generate & Register',
          type: 'primary',
          onClick: (m) => {
            const plant = document.getElementById('ngrt-plant')?.value || 'DFL UNIT-5 (JPT)';
            const arrDate = document.getElementById('ngrt-arrival-date')?.value || '2026-10-07';
            const trackId = document.getElementById('ngrt-trackid')?.value || nextTrackId;
            const recCount = document.getElementById('ngrt-receiving-count')?.value || '42 Count';
            const grDate = document.getElementById('ngrt-grading-date')?.value || '2026-10-07';
            const machine = document.getElementById('ngrt-grading-machine')?.value || 'Auto Grader #1';
            const startTime = document.getElementById('ngrt-start-time')?.value || '08:30';
            const endTime = document.getElementById('ngrt-end-time')?.value || '12:00';
            const breakTime = parseInt(document.getElementById('ngrt-break-time')?.value, 10) || 30;
            const sup = document.getElementById('ngrt-supervisor')?.value || 'Laxmi Narayana';
            const rem = document.getElementById('ngrt-remarks')?.value || '';

            const primaryCrate = modalCrateRows[0] || {
              variety: 'Vannamei (VM)',
              hlCount: '21/25',
              grade: 'Grade 1 (21/25)',
              treatment: 'Non-Phosphate',
              freezing: 'IQF Frozen',
              noOfCrates: 25,
              gradingQty: 500.0,
              hlTubWeight: 20.0
            };

            const totalCrates = modalCrateRows.reduce((acc, c) => acc + (c.noOfCrates || 0), 0);
            const totalQty = modalCrateRows.reduce((acc, c) => acc + (c.gradingQty || 0), 0);

            Modal.confirm({
              title: 'Confirm Grading Track ID Generation',
              message: `Are you sure you want to generate Grading Track ID <strong class="text-[#00A4B7]">${trackId}</strong> for <strong>${plant}</strong> (${machine} - ${totalCrates} Crates)?`,
              confirmText: 'Yes, Generate Track ID',
              cancelText: 'Cancel',
              isDestructive: false,
              onConfirm: () => {
                const newEntry = {
                  sNo: 1,
                  id: trackId,
                  trackId: trackId,
                  productionPlant: plant,
                  arrivalDate: arrDate,
                  receivingCount: recCount,
                  gradingDate: grDate,
                  gradingMachine: machine,
                  startTime: startTime,
                  endTime: endTime,
                  breakTimeMinutes: breakTime,
                  supervisor: sup,
                  remarks: rem,
                  variety: primaryCrate.variety,
                  hlCount: primaryCrate.hlCount,
                  grade: primaryCrate.grade,
                  treatment: primaryCrate.treatment,
                  freezing: primaryCrate.freezing,
                  noOfCrates: totalCrates || primaryCrate.noOfCrates,
                  gradingQty: totalQty || primaryCrate.gradingQty,
                  hlTubWeight: primaryCrate.hlTubWeight,
                  crateItems: JSON.parse(JSON.stringify(modalCrateRows)),
                  status: 'PASSED'
                };

                this.state.gradingTrackIds.forEach(r => { if (r.sNo) r.sNo += 1; });
                this.state.gradingTrackIds.unshift(newEntry);

                Toast.show(`Grading Track ID ${trackId} generated successfully`, 'success', 'Track ID Registered');
                this.renderGradingTrackIdScreen(container);
              }
            });
          }
        }
      ]
    });

    // Populate the modal crate table
    setTimeout(() => {
      renderModalCrateTable();
      document.getElementById('btn-add-modal-crate-row')?.addEventListener('click', () => {
        modalCrateRows.push({
          sNo: modalCrateRows.length + 1,
          variety: 'Vannamei (VM)',
          hlCount: '21/25',
          grade: 'Grade 1 (21/25)',
          treatment: 'Non-Phosphate',
          freezing: 'IQF Frozen',
          noOfCrates: 10,
          gradingQty: 200.0,
          hlTubWeight: 20.0
        });
        renderModalCrateTable();
      });
    }, 50);
  },

  // Show Edit Grading Track ID Modal
  showEditGradingTrackModal(row, container) {
    let modalCrateRows = row.crateItems && row.crateItems.length > 0 
      ? JSON.parse(JSON.stringify(row.crateItems))
      : [
          {
            sNo: 1,
            variety: row.variety || 'Vannamei (VM)',
            hlCount: row.hlCount || '21/25',
            grade: row.grade || 'Grade 1 (21/25)',
            treatment: row.treatment || 'Non-Phosphate',
            freezing: row.freezing || 'IQF Frozen',
            noOfCrates: row.noOfCrates || 20,
            gradingQty: row.gradingQty || 400.0,
            hlTubWeight: row.hlTubWeight || 20.0
          }
        ];

    const renderModalCrateTable = () => {
      const tbody = document.getElementById('edit-modal-crate-tbody');
      if (!tbody) return;
      tbody.innerHTML = modalCrateRows.map((item, idx) => `
        <tr class="hover:bg-[#F9FAFB] transition-colors border-b border-[#EBECF0]">
          <td class="px-2.5 py-2 text-center text-[#5E6C84] font-semibold">${idx + 1}</td>
          <td class="px-2.5 py-2">
            <select data-idx="${idx}" data-field="variety" class="emcr-input w-full text-xs px-2 py-1 bg-white border border-[#DFE1E6] rounded">
              <option value="Vannamei (VM)" ${item.variety === 'Vannamei (VM)' ? 'selected' : ''}>Vannamei (VM)</option>
              <option value="Black Tiger (BT)" ${item.variety === 'Black Tiger (BT)' ? 'selected' : ''}>Black Tiger (BT)</option>
              <option value="Asian Seabass" ${item.variety === 'Asian Seabass' ? 'selected' : ''}>Asian Seabass</option>
            </select>
          </td>
          <td class="px-2.5 py-2">
            <input type="text" data-idx="${idx}" data-field="hlCount" value="${item.hlCount}" class="emcr-input w-full text-xs px-2 py-1 bg-white border border-[#DFE1E6] rounded" />
          </td>
          <td class="px-2.5 py-2">
            <input type="text" data-idx="${idx}" data-field="grade" value="${item.grade}" class="emcr-input w-full text-xs px-2 py-1 bg-white border border-[#DFE1E6] rounded" />
          </td>
          <td class="px-2.5 py-2">
            <select data-idx="${idx}" data-field="treatment" class="emcr-input w-full text-xs px-2 py-1 bg-white border border-[#DFE1E6] rounded">
              <option value="Non-Phosphate" ${item.treatment === 'Non-Phosphate' ? 'selected' : ''}>Non-Phosphate</option>
              <option value="Fresh Raw" ${item.treatment === 'Fresh Raw' ? 'selected' : ''}>Fresh Raw</option>
              <option value="STPP Treated" ${item.treatment === 'STPP Treated' ? 'selected' : ''}>STPP Treated</option>
              <option value="Chilled Salt Slurry" ${item.treatment === 'Chilled Salt Slurry' ? 'selected' : ''}>Chilled Salt Slurry</option>
            </select>
          </td>
          <td class="px-2.5 py-2">
            <select data-idx="${idx}" data-field="freezing" class="emcr-input w-full text-xs px-2 py-1 bg-white border border-[#DFE1E6] rounded">
              <option value="IQF Frozen" ${item.freezing === 'IQF Frozen' ? 'selected' : ''}>IQF Frozen</option>
              <option value="Block Frozen" ${item.freezing === 'Block Frozen' ? 'selected' : ''}>Block Frozen</option>
              <option value="Semi-IQF" ${item.freezing === 'Semi-IQF' ? 'selected' : ''}>Semi-IQF</option>
              <option value="Blast Freezing" ${item.freezing === 'Blast Freezing' ? 'selected' : ''}>Blast Freezing</option>
            </select>
          </td>
          <td class="px-2.5 py-2 text-right">
            <input type="number" data-idx="${idx}" data-field="noOfCrates" value="${item.noOfCrates}" class="emcr-input w-16 text-xs px-2 py-1 bg-white border border-[#DFE1E6] rounded text-right" />
          </td>
          <td class="px-2.5 py-2 text-right">
            <input type="number" data-idx="${idx}" data-field="gradingQty" value="${item.gradingQty}" class="emcr-input w-20 text-xs px-2 py-1 bg-white border border-[#DFE1E6] rounded text-right font-bold text-[#00875A]" />
          </td>
          <td class="px-2.5 py-2 text-right">
            <input type="number" step="0.1" data-idx="${idx}" data-field="hlTubWeight" value="${item.hlTubWeight}" class="emcr-input w-16 text-xs px-2 py-1 bg-white border border-[#DFE1E6] rounded text-right" />
          </td>
          <td class="px-2.5 py-2 text-center">
            <button type="button" data-idx="${idx}" class="btn-del-edit-modal-crate-row p-1 text-[#FF5630] hover:bg-[#FFEBE6] rounded transition-colors" title="Remove Row">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </td>
        </tr>
      `).join('');

      document.querySelectorAll('.emcr-input').forEach(input => {
        input.addEventListener('change', (e) => {
          const idx = parseInt(e.target.dataset.idx, 10);
          const field = e.target.dataset.field;
          let val = e.target.value;
          if (field === 'noOfCrates') val = parseInt(val, 10) || 0;
          if (field === 'gradingQty' || field === 'hlTubWeight') val = parseFloat(val) || 0;
          modalCrateRows[idx][field] = val;
        });
      });

      document.querySelectorAll('.btn-del-edit-modal-crate-row').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.closest('button').dataset.idx, 10);
          if (modalCrateRows.length <= 1) {
            Toast.show('At least one crate table entry is required', 'warning');
            return;
          }
          modalCrateRows.splice(idx, 1);
          renderModalCrateTable();
        });
      });
    };

    Modal.open({
      title: `Edit Grading Track ID: ${row.trackId}`,
      size: 'xl',
      content: `
        <form id="form-edit-gr-track" class="space-y-4" onsubmit="return false;">
          <!-- 11 Form Input Fields -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
            <!-- 1. PRODUCTION PLANT * -->
            <div class="sm:col-span-2">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT <span class="text-[#DE350B]">*</span></label>
              <select id="egrt-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="DFL UNIT-5 (JPT)" ${row.productionPlant === 'DFL UNIT-5 (JPT)' ? 'selected' : ''}>DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)" ${row.productionPlant === 'DFL UNIT-3 (PSP)' ? 'selected' : ''}>DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)" ${row.productionPlant === 'DFL UNIT-4 (PND)' ? 'selected' : ''}>DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)" ${row.productionPlant === 'DFL UNIT-1 (VSP)' ? 'selected' : ''}>DFL UNIT-1 (VSP)</option>
                <option value="DFL UNIT-6 (JPT-II)" ${row.productionPlant === 'DFL UNIT-6 (JPT-II)' ? 'selected' : ''}>DFL UNIT-6 (JPT-II)</option>
                <option value="DFL UNIT-2 (KKD)" ${row.productionPlant === 'DFL UNIT-2 (KKD)' ? 'selected' : ''}>DFL UNIT-2 (KKD)</option>
              </select>
            </div>

            <!-- 2. ARRIVAL DATE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" id="egrt-arrival-date" value="${row.arrivalDate || '2026-10-06'}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 3. TRACK ID * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRACK ID <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="egrt-trackid" value="${row.trackId || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 4. RECEIVING COUNT * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">RECEIVING COUNT <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="egrt-receiving-count" value="${row.receivingCount || '42 Count'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 5. GRADING DATE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GRADING DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" id="egrt-grading-date" value="${row.gradingDate || '2026-10-06'}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 6. GRADING MACHINE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">GRADING MACHINE <span class="text-[#DE350B]">*</span></label>
              <select id="egrt-grading-machine" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="Auto Grader #1" ${row.gradingMachine === 'Auto Grader #1' ? 'selected' : ''}>Auto Grader #1</option>
                <option value="Auto Grader #2" ${row.gradingMachine === 'Auto Grader #2' ? 'selected' : ''}>Auto Grader #2</option>
                <option value="Auto Grader #3" ${row.gradingMachine === 'Auto Grader #3' ? 'selected' : ''}>Auto Grader #3</option>
                <option value="Manual Sizer #2" ${row.gradingMachine === 'Manual Sizer #2' ? 'selected' : ''}>Manual Sizer #2</option>
              </select>
            </div>

            <!-- 7. START TIME -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">START TIME</label>
              <input type="time" id="egrt-start-time" value="${row.startTime || '08:30'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 8. END TIME -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">END TIME</label>
              <input type="time" id="egrt-end-time" value="${row.endTime || '12:00'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 9. BREAK TIME(MINUTES) -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BREAK TIME(MINUTES)</label>
              <input type="number" id="egrt-break-time" value="${row.breakTimeMinutes || 30}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 10. SUPERVISOR * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SUPERVISOR <span class="text-[#DE350B]">*</span></label>
              <select id="egrt-supervisor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="Laxmi Narayana" ${row.supervisor === 'Laxmi Narayana' ? 'selected' : ''}>Laxmi Narayana</option>
                <option value="K. Subba Rao" ${row.supervisor === 'K. Subba Rao' ? 'selected' : ''}>K. Subba Rao</option>
                <option value="Ch. Prasad" ${row.supervisor === 'Ch. Prasad' ? 'selected' : ''}>Ch. Prasad</option>
                <option value="Mallesh" ${row.supervisor === 'Mallesh' ? 'selected' : ''}>Mallesh</option>
                <option value="D. Rambabu" ${row.supervisor === 'D. Rambabu' ? 'selected' : ''}>D. Rambabu</option>
                <option value="G. Suribabu" ${row.supervisor === 'G. Suribabu' ? 'selected' : ''}>G. Suribabu</option>
              </select>
            </div>

            <!-- 11. REMARKS -->
            <div class="sm:col-span-2 md:col-span-3 lg:col-span-4">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">REMARKS</label>
              <input type="text" id="egrt-remarks" value="${row.remarks || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>
          </div>

          <!-- Embedded Crate Table: Exact Data Table Columns -->
          <div class="mt-4 pt-3 border-t border-[#EBECF0]">
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Crate / Grade Allocation Table</h4>
              <button type="button" id="btn-add-edit-modal-crate-row" class="btn-primary px-3 py-1 rounded text-[11px] font-semibold flex items-center gap-1 border-0 cursor-pointer">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                <span>Add Crate Row</span>
              </button>
            </div>
            
            <div class="overflow-x-auto border border-[#DFE1E6] rounded-lg">
              <table class="w-full text-xs text-left border-collapse">
                <thead class="bg-[#FAFBFC] border-b border-[#EBECF0] text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider whitespace-nowrap">
                  <tr>
                    <th class="px-2.5 py-2 text-center">SNO</th>
                    <th class="px-2.5 py-2">Variety</th>
                    <th class="px-2.5 py-2">HL_Count (Per Lb)</th>
                    <th class="px-2.5 py-2">Grade</th>
                    <th class="px-2.5 py-2">Treatment</th>
                    <th class="px-2.5 py-2">Freezing</th>
                    <th class="px-2.5 py-2 text-right">No Of Crates</th>
                    <th class="px-2.5 py-2 text-right">Grading Qty</th>
                    <th class="px-2.5 py-2 text-right">HL/Tub Weight</th>
                    <th class="px-2.5 py-2 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody id="edit-modal-crate-tbody" class="divide-y divide-[#EBECF0] bg-white">
                </tbody>
              </table>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        {
          label: 'Save Changes',
          type: 'primary',
          onClick: (m) => {
            const plant = document.getElementById('egrt-plant')?.value || row.productionPlant;
            const arrDate = document.getElementById('egrt-arrival-date')?.value || row.arrivalDate;
            const trackId = document.getElementById('egrt-trackid')?.value || row.trackId;
            const recCount = document.getElementById('egrt-receiving-count')?.value || row.receivingCount;
            const grDate = document.getElementById('egrt-grading-date')?.value || row.gradingDate;
            const machine = document.getElementById('egrt-grading-machine')?.value || row.gradingMachine;
            const startTime = document.getElementById('egrt-start-time')?.value || row.startTime;
            const endTime = document.getElementById('egrt-end-time')?.value || row.endTime;
            const breakTime = parseInt(document.getElementById('egrt-break-time')?.value, 10) || row.breakTimeMinutes;
            const sup = document.getElementById('egrt-supervisor')?.value || row.supervisor;
            const rem = document.getElementById('egrt-remarks')?.value || row.remarks;

            const primaryCrate = modalCrateRows[0] || {
              variety: row.variety,
              hlCount: row.hlCount,
              grade: row.grade,
              treatment: row.treatment,
              freezing: row.freezing,
              noOfCrates: row.noOfCrates,
              gradingQty: row.gradingQty,
              hlTubWeight: row.hlTubWeight
            };

            const totalCrates = modalCrateRows.reduce((acc, c) => acc + (c.noOfCrates || 0), 0);
            const totalQty = modalCrateRows.reduce((acc, c) => acc + (c.gradingQty || 0), 0);

            Modal.confirm({
              title: 'Confirm Modifications',
              message: `Are you sure you want to update Grading Track ID <strong class="text-[#00A4B7]">${trackId}</strong>?`,
              confirmText: 'Save Changes',
              cancelText: 'Cancel',
              isDestructive: false,
              onConfirm: () => {
                row.productionPlant = plant;
                row.arrivalDate = arrDate;
                row.trackId = trackId;
                row.id = trackId;
                row.receivingCount = recCount;
                row.gradingDate = grDate;
                row.gradingMachine = machine;
                row.startTime = startTime;
                row.endTime = endTime;
                row.breakTimeMinutes = breakTime;
                row.supervisor = sup;
                row.remarks = rem;
                row.variety = primaryCrate.variety;
                row.hlCount = primaryCrate.hlCount;
                row.grade = primaryCrate.grade;
                row.treatment = primaryCrate.treatment;
                row.freezing = primaryCrate.freezing;
                row.noOfCrates = totalCrates || primaryCrate.noOfCrates;
                row.gradingQty = totalQty || primaryCrate.gradingQty;
                row.hlTubWeight = primaryCrate.hlTubWeight;
                row.crateItems = JSON.parse(JSON.stringify(modalCrateRows));

                Toast.show(`Grading Track ID ${row.trackId} updated successfully`, 'success');
                this.renderGradingTrackIdScreen(container);
              }
            });
          }
        }
      ]
    });

    setTimeout(() => {
      renderModalCrateTable();
      document.getElementById('btn-add-edit-modal-crate-row')?.addEventListener('click', () => {
        modalCrateRows.push({
          sNo: modalCrateRows.length + 1,
          variety: 'Vannamei (VM)',
          hlCount: '21/25',
          grade: 'Grade 1 (21/25)',
          treatment: 'Non-Phosphate',
          freezing: 'IQF Frozen',
          noOfCrates: 10,
          gradingQty: 200.0,
          hlTubWeight: 20.0
        });
        renderModalCrateTable();
      });
    }, 50);
  },

  // Show Grading Track Details Modal (Triggered on row click)
  showGradingTrackDetailsModal(row) {
    const crateItems = row.crateItems && row.crateItems.length > 0 ? row.crateItems : [
      {
        sNo: 1,
        variety: row.variety,
        hlCount: row.hlCount,
        grade: row.grade,
        treatment: row.treatment,
        freezing: row.freezing,
        noOfCrates: row.noOfCrates,
        gradingQty: row.gradingQty,
        hlTubWeight: row.hlTubWeight
      }
    ];

    Modal.open({
      title: `Grading Track ID Details: ${row.trackId}`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs">
          <!-- Top summary badge card -->
          <div class="bg-[#F0F9FF] border border-[#BAE6FD] rounded-lg p-3.5 flex items-center justify-between">
            <div>
              <span class="text-[11px] font-bold text-[#0284C7] uppercase tracking-wider block">Grading Track Code</span>
              <span class="text-base font-mono font-bold text-[#0C4A6E] mt-0.5 block">${row.trackId}</span>
            </div>
            <div class="text-right">
              <span class="lozenge lozenge-success">PASSED / ACTIVE</span>
              <span class="text-[11px] text-[#5E6C84] block mt-1">${row.gradingDate} • ${row.gradingMachine}</span>
            </div>
          </div>

          <!-- Key Details Grid (11 Fields) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 bg-[#F4F5F7] p-3 rounded-lg border border-[#DFE1E6]">
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Production Plant</span>
              <span class="font-semibold text-[#172B4D] block mt-0.5">${row.productionPlant}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Arrival Date</span>
              <span class="font-medium text-[#172B4D] block mt-0.5">${row.arrivalDate}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Receiving Count</span>
              <span class="font-semibold text-[#172B4D] block mt-0.5">${row.receivingCount || '42 Count'}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Grading Date</span>
              <span class="font-medium text-[#172B4D] block mt-0.5">${row.gradingDate}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Grading Machine</span>
              <span class="font-semibold text-[#00A4B7] block mt-0.5">${row.gradingMachine}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Operational Time</span>
              <span class="font-medium text-[#172B4D] block mt-0.5">${row.startTime || '08:30'} - ${row.endTime || '12:00'}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Break Time</span>
              <span class="font-medium text-[#172B4D] block mt-0.5">${row.breakTimeMinutes || 30} mins</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Supervisor</span>
              <span class="font-medium text-[#172B4D] block mt-0.5">${row.supervisor}</span>
            </div>
            <div class="sm:col-span-2 md:col-span-4">
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Operational Remarks</span>
              <span class="text-[#334155] block mt-0.5 bg-white p-2 rounded border border-[#DFE1E6]">${row.remarks || 'No operational remarks recorded'}</span>
            </div>
          </div>

          <!-- Crate Details Table -->
          <div class="border border-[#DFE1E6] rounded-lg overflow-hidden">
            <div class="bg-[#FAFBFC] px-3 py-2 border-b border-[#EBECF0]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Crate / Grade Breakdown</h4>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left border-collapse">
                <thead class="bg-[#FAFBFC] border-b border-[#EBECF0] text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider whitespace-nowrap">
                  <tr>
                    <th class="px-3 py-2 text-center">SNO</th>
                    <th class="px-3 py-2">Variety</th>
                    <th class="px-3 py-2">HL_Count (Per Lb)</th>
                    <th class="px-3 py-2">Grade</th>
                    <th class="px-3 py-2">Treatment</th>
                    <th class="px-3 py-2">Freezing</th>
                    <th class="px-3 py-2 text-right">No Of Crates</th>
                    <th class="px-3 py-2 text-right">Grading Qty</th>
                    <th class="px-3 py-2 text-right">HL/Tub Weight</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#EBECF0] bg-white">
                  ${crateItems.map((item, idx) => `
                    <tr class="hover:bg-[#F9FAFB]">
                      <td class="px-3 py-2 text-center text-[#5E6C84] font-semibold">${idx + 1}</td>
                      <td class="px-3 py-2 font-bold text-[#172B4D]">${item.variety}</td>
                      <td class="px-3 py-2 font-semibold text-[#172B4D]">${item.hlCount}</td>
                      <td class="px-3 py-2 font-extrabold text-[#0284C7]">${item.grade}</td>
                      <td class="px-3 py-2">${item.treatment}</td>
                      <td class="px-3 py-2 font-bold text-[#008DA6]">${item.freezing}</td>
                      <td class="px-3 py-2 text-right font-semibold text-[#172B4D]">${item.noOfCrates}</td>
                      <td class="px-3 py-2 text-right font-bold text-[#00875A]">${Number(item.gradingQty).toLocaleString()} KG</td>
                      <td class="px-3 py-2 text-right font-medium text-[#172B4D]">${item.hlTubWeight} KG</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: (m) => m.close() }
      ]
    });
  },

  // =========================================================================
  // SCREEN 7: VALUE ADDITION TRACKID (OPERATIONS TAB 6)
  // =========================================================================
  renderValueAdditionTrackIdScreen(container) {
    container.innerHTML = `
      <div class="space-y-4">
        <!-- Top Action Bar (No Subheading) -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-0">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">Value Addition Track ID</h1>
          </div>
          <div>
            <button type="button" id="btn-gen-va-trackid" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer border-0">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Generate VA Track ID</span>
            </button>
          </div>
        </div>

        <!-- Filter Card: Exact User Application UI Style (2 Balanced Rows × 4 Columns) -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>

            <!-- Filter Controls: Reset & Toggle Open/Close -->
            <div class="inline-flex items-center" style="gap: 8px; display: inline-flex;">
              <button type="button" id="vatrack-top-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-7 h-7 min-w-[28px] min-h-[28px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-none transition-colors cursor-pointer select-none" style="width: 28px; height: 28px; min-width: 28px; min-height: 28px; border-radius: 0; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Reset all filters" aria-label="Reset all filters">
                <svg class="w-4 h-4 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>

              <button type="button" id="vatrack-top-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-7 h-7 min-w-[28px] min-h-[28px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-none transition-colors cursor-pointer select-none" style="width: 28px; height: 28px; min-width: 28px; min-height: 28px; border-radius: 0; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Hide Filter" aria-label="Hide Filter">
                <svg class="w-4 h-4 text-current dt-top-filter-toggle-icon transform transition-transform duration-200" id="vatrack-top-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <!-- Collapsible Filter Inputs Grid (2 Balanced Rows × 4 Columns) -->
          <div id="vatrack-top-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
            <!-- 1. PRODUCTION PLANT -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT</label>
              <select id="vat-filter-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">All Production Plants</option>
                <option value="DFL UNIT-5 (JPT)">DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
                <option value="DFL UNIT-6 (JPT-II)">DFL UNIT-6 (JPT-II)</option>
                <option value="DFL UNIT-2 (KKD)">DFL UNIT-2 (KKD)</option>
              </select>
            </div>

            <!-- 2. ARRIVAL DATE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL DATE</label>
              <div class="erp-date-wrapper">
                <input type="date" id="vat-filter-arrival-date" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 3. VALUE ADDITION DATE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VALUE ADDITION DATE</label>
              <div class="erp-date-wrapper">
                <input type="date" id="vat-filter-va-date" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 4. SHIFT -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SHIFT</label>
              <select id="vat-filter-shift" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Shifts</option>
                <option value="Shift A (Day)">Shift A (Day)</option>
                <option value="Shift B (Evening)">Shift B (Evening)</option>
                <option value="Shift C (Night)">Shift C (Night)</option>
              </select>
            </div>

            <!-- 5. TRACK ID -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRACK ID</label>
              <input type="text" id="vat-filter-trackid" placeholder="Filter Track ID..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono" />
            </div>

            <!-- 6. VARIETY -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VARIETY</label>
              <select id="vat-filter-variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Varieties</option>
                <option value="Vannamei (VM)">Vannamei (VM)</option>
                <option value="Black Tiger (BT)">Black Tiger (BT)</option>
                <option value="Asian Seabass">Asian Seabass</option>
              </select>
            </div>

            <!-- 7. SUPERVISOR -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SUPERVISOR</label>
              <select id="vat-filter-supervisor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Supervisors</option>
                <option value="Laxmi Narayana">Laxmi Narayana</option>
                <option value="K. Subba Rao">K. Subba Rao</option>
                <option value="Ch. Prasad">Ch. Prasad</option>
                <option value="Mallesh">Mallesh</option>
                <option value="D. Rambabu">D. Rambabu</option>
                <option value="G. Suribabu">G. Suribabu</option>
              </select>
            </div>

            <!-- 8. Search Button Slot (Compact, Natural Width) -->
            <div class="flex items-end">
              <button type="button" id="vat-filter-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Data Table Container -->
        <div id="va-trackid-table-container"></div>
      </div>
    `;

    // Button Generate Handler
    document.getElementById('btn-gen-va-trackid')?.addEventListener('click', () => {
      this.showGenerateVaTrackModal(container);
    });

    // Toggle filter open/close handler
    const toggleBtn = document.getElementById('vatrack-top-toggle-btn');
    toggleBtn?.addEventListener('click', () => {
      const body = document.getElementById('vatrack-top-filter-body');
      const icon = document.getElementById('vatrack-top-toggle-icon');
      if (body) {
        body.classList.toggle('hidden');
        if (body.classList.contains('hidden')) {
          toggleBtn.title = 'Show Filter';
          icon?.classList.add('-rotate-90');
        } else {
          toggleBtn.title = 'Hide Filter';
          icon?.classList.remove('-rotate-90');
        }
      }
    });

    // Reset filter handler
    const resetBtn = document.getElementById('vatrack-top-reset-btn');
    resetBtn?.addEventListener('click', () => {
      if (document.getElementById('vat-filter-plant')) document.getElementById('vat-filter-plant').value = 'ALL';
      if (document.getElementById('vat-filter-arrival-date')) document.getElementById('vat-filter-arrival-date').value = '';
      if (document.getElementById('vat-filter-va-date')) document.getElementById('vat-filter-va-date').value = '';
      if (document.getElementById('vat-filter-shift')) document.getElementById('vat-filter-shift').value = 'ALL';
      if (document.getElementById('vat-filter-trackid')) document.getElementById('vat-filter-trackid').value = '';
      if (document.getElementById('vat-filter-variety')) document.getElementById('vat-filter-variety').value = 'ALL';
      if (document.getElementById('vat-filter-supervisor')) document.getElementById('vat-filter-supervisor').value = 'ALL';

      renderTable(this.state.vaTrackIds);
      Toast.show('Filters reset', 'info');
    });

    // Main Table render function
    const renderTable = (data) => {
      new DataTable({
        containerId: 'va-trackid-table-container',
        data: data,
        keyField: 'trackId',
        tableTitle: 'Value Addition Track ID Registry',
        searchable: true,
        exportable: true,
        pageSize: 10,
        columns: [
          // 1. S.No
          {
            field: 'sNo',
            header: 'S.No',
            render: (v, row, idx) => `<span class="text-[#5E6C84] font-semibold">${v || (idx + 1)}</span>`
          },
          // 2. Track ID
          {
            field: 'trackId',
            header: 'Track ID',
            render: (v) => `<span class="font-mono font-bold text-[#00A4B7] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BAE6FD] whitespace-nowrap">${v}</span>`
          },
          // 3. Production Plant
          {
            field: 'productionPlant',
            header: 'Production Plant',
            render: (v) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 4. Arrival Date
          {
            field: 'arrivalDate',
            header: 'Arrival Date',
            render: (v) => `<span class="text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 5. Value Addition Date
          {
            field: 'valueAdditionDate',
            header: 'VA Date',
            render: (v) => `<span class="text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 6. Shift
          {
            field: 'shift',
            header: 'Shift',
            render: (v) => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F4F5F7] text-[#42526E] border border-[#DFE1E6] whitespace-nowrap">${v}</span>`
          },
          // 7. Supervisor
          {
            field: 'supervisor',
            header: 'Supervisor',
            render: (v) => `<span class="font-medium text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 8. Variety
          {
            field: 'variety',
            header: 'Variety',
            render: (v) => `<span class="font-bold text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 9. HL Count
          {
            field: 'hlCount',
            header: 'HL Count',
            render: (v) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 10. Crates
          {
            field: 'crates',
            header: 'Crates',
            render: (v) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${v} Crates</span>`
          },
          // 11. HL WT (KGS)
          {
            field: 'hlWtKgs',
            header: 'HL WT (KGS)',
            render: (v) => `<span class="font-bold text-[#172B4D] whitespace-nowrap">${Number(v).toLocaleString()} KG</span>`
          },
          // 12. VA OUT QUANTITY
          {
            field: 'vaOutQuantity',
            header: 'VA Out Qty',
            render: (v) => `<span class="font-bold text-[#00875A] whitespace-nowrap">${Number(v).toLocaleString()} KG</span>`
          },
          // 13. TOTALS ()
          {
            field: 'totals',
            header: 'Totals / Yield',
            render: (v) => `<span class="font-extrabold text-xs px-2.5 py-0.5 rounded bg-[#EBF8FF] text-[#0284C7] border border-[#BAE6FD] whitespace-nowrap">${v}</span>`
          }
          // 14. Actions (appended and centered)
        ],
        actions: [
          {
            label: 'Transfer to Plant',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>`,
            onClick: (row) => this.showTransferPlantModal(row.trackId, row.vaOutQuantity)
          },
          {
            label: 'Edit',
            icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: (row) => this.showEditVaTrackModal(row, container)
          },
          {
            label: 'Delete',
            icon: `<svg class="w-4 h-4 text-[#FF5630]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Delete Value Addition Track ID',
                message: `Are you sure you want to delete Value Addition Track ID <strong class="text-[#00A4B7]">${row.trackId}</strong>? This action cannot be undone.`,
                confirmText: 'Yes, Delete',
                cancelText: 'Cancel',
                isDestructive: true,
                onConfirm: () => {
                  const idx = this.state.vaTrackIds.findIndex(r => r.id === row.id || r.trackId === row.trackId);
                  if (idx !== -1) {
                    this.state.vaTrackIds.splice(idx, 1);
                    renderTable(this.state.vaTrackIds);
                    Toast.show(`Value Addition Track ID ${row.trackId} deleted`, 'info');
                  }
                }
              });
            }
          }
        ],
        onRowClick: (row) => this.showVaTrackDetailsModal(row)
      });
    };

    renderTable(this.state.vaTrackIds);

    // Search button event binding
    const searchBtn = document.getElementById('vat-filter-search-btn');
    searchBtn?.addEventListener('click', () => {
      const plantVal = document.getElementById('vat-filter-plant')?.value || 'ALL';
      const arrDateVal = document.getElementById('vat-filter-arrival-date')?.value || '';
      const vaDateVal = document.getElementById('vat-filter-va-date')?.value || '';
      const shiftVal = document.getElementById('vat-filter-shift')?.value || 'ALL';
      const trackIdVal = (document.getElementById('vat-filter-trackid')?.value || '').toLowerCase().trim();
      const varietyVal = document.getElementById('vat-filter-variety')?.value || 'ALL';
      const supVal = document.getElementById('vat-filter-supervisor')?.value || 'ALL';

      const filtered = this.state.vaTrackIds.filter(r => {
        if (plantVal !== 'ALL' && r.productionPlant !== plantVal) return false;
        if (arrDateVal && r.arrivalDate && !r.arrivalDate.includes(arrDateVal)) return false;
        if (vaDateVal && r.valueAdditionDate && !r.valueAdditionDate.includes(vaDateVal)) return false;
        if (shiftVal !== 'ALL' && r.shift !== shiftVal) return false;
        if (trackIdVal && !String(r.trackId).toLowerCase().includes(trackIdVal)) return false;
        if (varietyVal !== 'ALL' && r.variety !== varietyVal) return false;
        if (supVal !== 'ALL' && r.supervisor !== supVal) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Applied filters: ${filtered.length} value addition record(s) matched`, 'info');
    });
  },

  // Show Generate Value Addition Track ID Modal
  showGenerateVaTrackModal(container) {
    const nextTrackId = `TRK-VA-2026-${Math.floor(610 + Math.random() * 80)}`;

    Modal.open({
      title: 'Generate Value Addition Track ID',
      size: 'lg',
      content: `
        <form id="form-gen-va-track" class="space-y-4" onsubmit="return false;">
          <!-- 12 Form Input Fields -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            <!-- 1. PRODUCTION PLANT * -->
            <div class="sm:col-span-2">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT <span class="text-[#DE350B]">*</span></label>
              <select id="nvat-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="DFL UNIT-5 (JPT)" selected>DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
                <option value="DFL UNIT-6 (JPT-II)">DFL UNIT-6 (JPT-II)</option>
                <option value="DFL UNIT-2 (KKD)">DFL UNIT-2 (KKD)</option>
              </select>
            </div>

            <!-- 2. ARRIVAL DATE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" id="nvat-arrival-date" value="2026-10-07" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 3. TRACK ID * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRACK ID <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="nvat-trackid" value="${nextTrackId}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 4. VALUE ADDITION DATE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VALUE ADDITION DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" id="nvat-va-date" value="2026-10-07" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 5. SHIFT * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SHIFT <span class="text-[#DE350B]">*</span></label>
              <select id="nvat-shift" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="Shift A (Day)" selected>Shift A (Day)</option>
                <option value="Shift B (Evening)">Shift B (Evening)</option>
                <option value="Shift C (Night)">Shift C (Night)</option>
              </select>
            </div>

            <!-- 6. SUPERVISOR * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SUPERVISOR <span class="text-[#DE350B]">*</span></label>
              <select id="nvat-supervisor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="Laxmi Narayana" selected>Laxmi Narayana</option>
                <option value="K. Subba Rao">K. Subba Rao</option>
                <option value="Ch. Prasad">Ch. Prasad</option>
                <option value="Mallesh">Mallesh</option>
                <option value="D. Rambabu">D. Rambabu</option>
                <option value="G. Suribabu">G. Suribabu</option>
              </select>
            </div>

            <!-- 7. VARIETY * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VARIETY <span class="text-[#DE350B]">*</span></label>
              <select id="nvat-variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold">
                <option value="Vannamei (VM)" selected>Vannamei (VM)</option>
                <option value="Black Tiger (BT)">Black Tiger (BT)</option>
                <option value="Asian Seabass">Asian Seabass</option>
              </select>
            </div>

            <!-- 8. HL COUNT * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">HL COUNT <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="nvat-hl-count" value="21/25" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold" placeholder="e.g. 21/25" />
            </div>

            <!-- 9. CRATES * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">CRATES <span class="text-[#DE350B]">*</span></label>
              <input type="number" id="nvat-crates" value="40" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 10. HL WT (KGS) * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">HL WT (KGS) <span class="text-[#DE350B]">*</span></label>
              <input type="number" id="nvat-hl-wt" value="1000" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" />
            </div>

            <!-- 11. VAOUTQUANTITY * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VAOUTQUANTITY <span class="text-[#DE350B]">*</span></label>
              <input type="number" id="nvat-vaout-qty" value="880" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-bold text-[#00875A]" />
            </div>

            <!-- 12. TOTALS () * -->
            <div class="sm:col-span-2 md:col-span-3">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TOTALS () <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="nvat-totals" value="88.0% (880 KG)" class="w-full text-xs px-2.5 py-1.5 bg-[#F9FAFB] border border-[#DFE1E6] rounded font-extrabold text-[#00A4B7] focus:outline-none focus:border-[#0284C7]" />
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        {
          label: 'Transfer to Another Plant',
          type: 'secondary',
          onClick: (m) => {
            const trackId = document.getElementById('nvat-trackid')?.value || nextTrackId;
            const vaOut = parseFloat(document.getElementById('nvat-vaout-qty')?.value) || 880;
            this.showTransferPlantModal(trackId, vaOut);
          }
        },
        {
          label: 'Generate & Register',
          type: 'primary',
          onClick: (m) => {
            const plant = document.getElementById('nvat-plant')?.value || 'DFL UNIT-5 (JPT)';
            const arrDate = document.getElementById('nvat-arrival-date')?.value || '2026-10-07';
            const trackId = document.getElementById('nvat-trackid')?.value || nextTrackId;
            const vaDate = document.getElementById('nvat-va-date')?.value || '2026-10-07';
            const shift = document.getElementById('nvat-shift')?.value || 'Shift A (Day)';
            const supervisor = document.getElementById('nvat-supervisor')?.value || 'Laxmi Narayana';
            const variety = document.getElementById('nvat-variety')?.value || 'Vannamei (VM)';
            const hlCount = document.getElementById('nvat-hl-count')?.value || '21/25';
            const crates = parseInt(document.getElementById('nvat-crates')?.value, 10) || 40;
            const hlWtKgs = parseFloat(document.getElementById('nvat-hl-wt')?.value) || 1000;
            const vaOutQuantity = parseFloat(document.getElementById('nvat-vaout-qty')?.value) || 880;
            const totals = document.getElementById('nvat-totals')?.value || `${((vaOutQuantity / hlWtKgs) * 100).toFixed(1)}% (${vaOutQuantity} KG)`;

            Modal.confirm({
              title: 'Confirm VA Track ID Generation',
              message: `Are you sure you want to generate Value Addition Track ID <strong class="text-[#00A4B7]">${trackId}</strong> for <strong>${plant}</strong> (${variety} - ${vaOutQuantity} KG)?`,
              confirmText: 'Yes, Generate Track ID',
              cancelText: 'Cancel',
              isDestructive: false,
              onConfirm: () => {
                const newEntry = {
                  sNo: 1,
                  id: trackId,
                  trackId: trackId,
                  productionPlant: plant,
                  arrivalDate: arrDate,
                  valueAdditionDate: vaDate,
                  shift: shift,
                  supervisor: supervisor,
                  variety: variety,
                  hlCount: hlCount,
                  crates: crates,
                  hlWtKgs: hlWtKgs,
                  vaOutQuantity: vaOutQuantity,
                  totals: totals,
                  status: 'IN_PROGRESS'
                };

                this.state.vaTrackIds.forEach(r => { if (r.sNo) r.sNo += 1; });
                this.state.vaTrackIds.unshift(newEntry);

                Toast.show(`Value Addition Track ID ${trackId} generated successfully`, 'success', 'Track ID Registered');
                this.renderValueAdditionTrackIdScreen(container);
              }
            });
          }
        }
      ]
    });

    // Auto-update totals on weight change
    setTimeout(() => {
      const hlIn = document.getElementById('nvat-hl-wt');
      const vaIn = document.getElementById('nvat-vaout-qty');
      const totIn = document.getElementById('nvat-totals');
      const calcTotals = () => {
        const hw = parseFloat(hlIn?.value) || 0;
        const vq = parseFloat(vaIn?.value) || 0;
        if (hw > 0 && vq > 0) {
          const pct = ((vq / hw) * 100).toFixed(1);
          if (totIn) totIn.value = `${pct}% (${vq.toLocaleString()} KG)`;
        }
      };
      hlIn?.addEventListener('input', calcTotals);
      vaIn?.addEventListener('input', calcTotals);
    }, 50);
  },

  // Show Edit Value Addition Track ID Modal
  showEditVaTrackModal(row, container) {
    Modal.open({
      title: `Edit Value Addition Track ID: ${row.trackId}`,
      size: 'lg',
      content: `
        <form id="form-edit-va-track" class="space-y-4" onsubmit="return false;">
          <!-- 12 Form Input Fields -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            <!-- 1. PRODUCTION PLANT * -->
            <div class="sm:col-span-2">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT <span class="text-[#DE350B]">*</span></label>
              <select id="evat-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="DFL UNIT-5 (JPT)" ${row.productionPlant === 'DFL UNIT-5 (JPT)' ? 'selected' : ''}>DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)" ${row.productionPlant === 'DFL UNIT-3 (PSP)' ? 'selected' : ''}>DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)" ${row.productionPlant === 'DFL UNIT-4 (PND)' ? 'selected' : ''}>DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)" ${row.productionPlant === 'DFL UNIT-1 (VSP)' ? 'selected' : ''}>DFL UNIT-1 (VSP)</option>
                <option value="DFL UNIT-6 (JPT-II)" ${row.productionPlant === 'DFL UNIT-6 (JPT-II)' ? 'selected' : ''}>DFL UNIT-6 (JPT-II)</option>
                <option value="DFL UNIT-2 (KKD)" ${row.productionPlant === 'DFL UNIT-2 (KKD)' ? 'selected' : ''}>DFL UNIT-2 (KKD)</option>
              </select>
            </div>

            <!-- 2. ARRIVAL DATE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" id="evat-arrival-date" value="${row.arrivalDate || '2026-10-06'}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 3. TRACK ID * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRACK ID <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="evat-trackid" value="${row.trackId || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 4. VALUE ADDITION DATE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VALUE ADDITION DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" id="evat-va-date" value="${row.valueAdditionDate || '2026-10-07'}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 5. SHIFT * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SHIFT <span class="text-[#DE350B]">*</span></label>
              <select id="evat-shift" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="Shift A (Day)" ${row.shift === 'Shift A (Day)' ? 'selected' : ''}>Shift A (Day)</option>
                <option value="Shift B (Evening)" ${row.shift === 'Shift B (Evening)' ? 'selected' : ''}>Shift B (Evening)</option>
                <option value="Shift C (Night)" ${row.shift === 'Shift C (Night)' ? 'selected' : ''}>Shift C (Night)</option>
              </select>
            </div>

            <!-- 6. SUPERVISOR * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SUPERVISOR <span class="text-[#DE350B]">*</span></label>
              <select id="evat-supervisor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="Laxmi Narayana" ${row.supervisor === 'Laxmi Narayana' ? 'selected' : ''}>Laxmi Narayana</option>
                <option value="K. Subba Rao" ${row.supervisor === 'K. Subba Rao' ? 'selected' : ''}>K. Subba Rao</option>
                <option value="Ch. Prasad" ${row.supervisor === 'Ch. Prasad' ? 'selected' : ''}>Ch. Prasad</option>
                <option value="Mallesh" ${row.supervisor === 'Mallesh' ? 'selected' : ''}>Mallesh</option>
                <option value="D. Rambabu" ${row.supervisor === 'D. Rambabu' ? 'selected' : ''}>D. Rambabu</option>
                <option value="G. Suribabu" ${row.supervisor === 'G. Suribabu' ? 'selected' : ''}>G. Suribabu</option>
              </select>
            </div>

            <!-- 7. VARIETY * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VARIETY <span class="text-[#DE350B]">*</span></label>
              <select id="evat-variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold">
                <option value="Vannamei (VM)" ${row.variety === 'Vannamei (VM)' ? 'selected' : ''}>Vannamei (VM)</option>
                <option value="Black Tiger (BT)" ${row.variety === 'Black Tiger (BT)' ? 'selected' : ''}>Black Tiger (BT)</option>
                <option value="Asian Seabass" ${row.variety === 'Asian Seabass' ? 'selected' : ''}>Asian Seabass</option>
              </select>
            </div>

            <!-- 8. HL COUNT * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">HL COUNT <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="evat-hl-count" value="${row.hlCount || '21/25'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold" />
            </div>

            <!-- 9. CRATES * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">CRATES <span class="text-[#DE350B]">*</span></label>
              <input type="number" id="evat-crates" value="${row.crates || 40}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 10. HL WT (KGS) * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">HL WT (KGS) <span class="text-[#DE350B]">*</span></label>
              <input type="number" id="evat-hl-wt" value="${row.hlWtKgs || 1000}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]" />
            </div>

            <!-- 11. VAOUTQUANTITY * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VAOUTQUANTITY <span class="text-[#DE350B]">*</span></label>
              <input type="number" id="evat-vaout-qty" value="${row.vaOutQuantity || 880}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-bold text-[#00875A]" />
            </div>

            <!-- 12. TOTALS () * -->
            <div class="sm:col-span-2 md:col-span-3">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TOTALS () <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="evat-totals" value="${row.totals || '88.0% (880 KG)'}" class="w-full text-xs px-2.5 py-1.5 bg-[#F9FAFB] border border-[#DFE1E6] rounded font-extrabold text-[#00A4B7] focus:outline-none focus:border-[#0284C7]" />
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        {
          label: 'Transfer to Another Plant',
          type: 'secondary',
          onClick: (m) => {
            this.showTransferPlantModal(row.trackId, row.vaOutQuantity);
          }
        },
        {
          label: 'Save Changes',
          type: 'primary',
          onClick: (m) => {
            const plant = document.getElementById('evat-plant')?.value || row.productionPlant;
            const arrDate = document.getElementById('evat-arrival-date')?.value || row.arrivalDate;
            const trackId = document.getElementById('evat-trackid')?.value || row.trackId;
            const vaDate = document.getElementById('evat-va-date')?.value || row.valueAdditionDate;
            const shift = document.getElementById('evat-shift')?.value || row.shift;
            const supervisor = document.getElementById('evat-supervisor')?.value || row.supervisor;
            const variety = document.getElementById('evat-variety')?.value || row.variety;
            const hlCount = document.getElementById('evat-hl-count')?.value || row.hlCount;
            const crates = parseInt(document.getElementById('evat-crates')?.value, 10) || row.crates;
            const hlWtKgs = parseFloat(document.getElementById('evat-hl-wt')?.value) || row.hlWtKgs;
            const vaOutQuantity = parseFloat(document.getElementById('evat-vaout-qty')?.value) || row.vaOutQuantity;
            const totals = document.getElementById('evat-totals')?.value || row.totals;

            Modal.confirm({
              title: 'Confirm Modifications',
              message: `Are you sure you want to update Value Addition Track ID <strong class="text-[#00A4B7]">${trackId}</strong>?`,
              confirmText: 'Save Changes',
              cancelText: 'Cancel',
              isDestructive: false,
              onConfirm: () => {
                row.productionPlant = plant;
                row.arrivalDate = arrDate;
                row.trackId = trackId;
                row.id = trackId;
                row.valueAdditionDate = vaDate;
                row.shift = shift;
                row.supervisor = supervisor;
                row.variety = variety;
                row.hlCount = hlCount;
                row.crates = crates;
                row.hlWtKgs = hlWtKgs;
                row.vaOutQuantity = vaOutQuantity;
                row.totals = totals;

                Toast.show(`Value Addition Track ID ${row.trackId} updated successfully`, 'success');
                this.renderValueAdditionTrackIdScreen(container);
              }
            });
          }
        }
      ]
    });

    setTimeout(() => {
      const hlIn = document.getElementById('evat-hl-wt');
      const vaIn = document.getElementById('evat-vaout-qty');
      const totIn = document.getElementById('evat-totals');
      const calcTotals = () => {
        const hw = parseFloat(hlIn?.value) || 0;
        const vq = parseFloat(vaIn?.value) || 0;
        if (hw > 0 && vq > 0) {
          const pct = ((vq / hw) * 100).toFixed(1);
          if (totIn) totIn.value = `${pct}% (${vq.toLocaleString()} KG)`;
        }
      };
      hlIn?.addEventListener('input', calcTotals);
      vaIn?.addEventListener('input', calcTotals);
    }, 50);
  },

  // Show Details Modal (Row click)
  showVaTrackDetailsModal(row) {
    Modal.open({
      title: `Value Addition Track ID Details: ${row.trackId}`,
      size: 'lg',
      content: `
        <div class="space-y-4 text-xs">
          <!-- Top summary badge card -->
          <div class="bg-[#F0F9FF] border border-[#BAE6FD] rounded-lg p-3.5 flex items-center justify-between">
            <div>
              <span class="text-[11px] font-bold text-[#0284C7] uppercase tracking-wider block">Value Addition Track Code</span>
              <span class="text-base font-mono font-bold text-[#0C4A6E] mt-0.5 block">${row.trackId}</span>
            </div>
            <div class="text-right">
              <span class="lozenge ${row.status === 'COMPLETED' ? 'lozenge-success' : 'lozenge-primary'}">${row.status || 'IN_PROGRESS'}</span>
              <span class="text-[11px] text-[#5E6C84] block mt-1">${row.valueAdditionDate} • ${row.shift}</span>
            </div>
          </div>

          <!-- Key Details Grid (12 Fields) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-[#F4F5F7] p-3 rounded-lg border border-[#DFE1E6]">
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Production Plant</span>
              <span class="font-semibold text-[#172B4D] block mt-0.5">${row.productionPlant}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Arrival Date</span>
              <span class="font-medium text-[#172B4D] block mt-0.5">${row.arrivalDate}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">VA Date</span>
              <span class="font-medium text-[#172B4D] block mt-0.5">${row.valueAdditionDate}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Processing Shift</span>
              <span class="font-medium text-[#172B4D] block mt-0.5">${row.shift}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Assigned Supervisor</span>
              <span class="font-medium text-[#172B4D] block mt-0.5">${row.supervisor}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Variety</span>
              <span class="font-bold text-[#172B4D] block mt-0.5">${row.variety}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">HL Count</span>
              <span class="font-semibold text-[#172B4D] block mt-0.5">${row.hlCount}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Crates</span>
              <span class="font-semibold text-[#172B4D] block mt-0.5">${row.crates} Crates</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">HL WT (KGS)</span>
              <span class="font-bold text-[#172B4D] block mt-0.5">${Number(row.hlWtKgs).toLocaleString()} KG</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">VA Out Quantity</span>
              <span class="font-bold text-[#00875A] block mt-0.5">${Number(row.vaOutQuantity).toLocaleString()} KG</span>
            </div>
            <div class="sm:col-span-2">
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Totals / Yield</span>
              <span class="font-extrabold text-[#00A4B7] block mt-0.5">${row.totals}</span>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        {
          label: 'Transfer to Another Plant',
          type: 'secondary',
          onClick: (m) => {
            this.showTransferPlantModal(row.trackId, row.vaOutQuantity);
          }
        },
        { label: 'Close', type: 'secondary', onClick: (m) => m.close() }
      ]
    });
  },

  // Transfer to Another Plant Modal
  showTransferPlantModal(defaultTrackId = '', defaultQty = 850) {
    Modal.open({
      title: 'Transfer to Another Plant',
      size: 'md',
      content: `
        <form id="form-transfer-plant" class="space-y-4 text-xs" onsubmit="return false;">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SOURCE PLANT <span class="text-[#DE350B]">*</span></label>
              <select id="tf-source-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="DFL UNIT-5 (JPT)" selected>DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
                <option value="DFL UNIT-6 (JPT-II)">DFL UNIT-6 (JPT-II)</option>
                <option value="DFL UNIT-2 (KKD)">DFL UNIT-2 (KKD)</option>
              </select>
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">DESTINATION PLANT <span class="text-[#DE350B]">*</span></label>
              <select id="tf-dest-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#00A4B7]">
                <option value="DFL UNIT-3 (PSP)" selected>DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-5 (JPT)">DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
                <option value="DFL UNIT-6 (JPT-II)">DFL UNIT-6 (JPT-II)</option>
                <option value="DFL UNIT-2 (KKD)">DFL UNIT-2 (KKD)</option>
              </select>
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRACK ID <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="tf-track-id" value="${defaultTrackId || 'TRK-VA-2026-601'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#0284C7]" />
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRANSFER QTY (KGS) <span class="text-[#DE350B]">*</span></label>
              <input type="number" id="tf-qty" value="${defaultQty || 850}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-bold text-[#00875A] focus:outline-none focus:border-[#0284C7]" />
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">VEHICLE NUMBER <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="tf-vehicle" value="AP-39-TX-8842" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono focus:outline-none focus:border-[#0284C7]" />
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">DISPATCH DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" id="tf-date" value="2026-10-07" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">DISPATCH SUPERVISOR <span class="text-[#DE350B]">*</span></label>
              <select id="tf-supervisor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="Laxmi Narayana" selected>Laxmi Narayana</option>
                <option value="K. Subba Rao">K. Subba Rao</option>
                <option value="Ch. Prasad">Ch. Prasad</option>
                <option value="Mallesh">Mallesh</option>
              </select>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        {
          label: 'Confirm Transfer',
          type: 'primary',
          onClick: (m) => {
            const source = document.getElementById('tf-source-plant')?.value || 'DFL UNIT-5 (JPT)';
            const dest = document.getElementById('tf-dest-plant')?.value || 'DFL UNIT-3 (PSP)';
            const trk = document.getElementById('tf-track-id')?.value || 'TRK-VA-2026-601';
            const qty = document.getElementById('tf-qty')?.value || '850';

            Modal.confirm({
              title: 'Confirm Plant Transfer Dispatch',
              message: `Are you sure you want to dispatch <strong>${qty} KG</strong> of lot <strong class="text-[#00A4B7]">${trk}</strong> from <strong>${source}</strong> to <strong>${dest}</strong>?`,
              confirmText: 'Yes, Dispatch Transfer',
              cancelText: 'Cancel',
              isDestructive: false,
              onConfirm: () => {
                m.close();
                Toast.show(`Transfer of ${qty} KG to ${dest} initiated successfully`, 'success', 'Transfer Dispatched');
              }
            });
          }
        }
      ]
    });
  },

  // =========================================================================
  // SCREEN 8: HON QTY TRANSFER AFTER VA (OPERATIONS TAB 7)
  // =========================================================================
  renderHonQtyTransferScreen(container) {
    container.innerHTML = `
      <div class="space-y-4">
        <!-- Top Action Bar (No Subheading) -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-0">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">HON QTY Transfer After VA</h1>
          </div>
          <div>
            <button type="button" id="btn-add-hon-transfer" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer border-0">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Add HON QTY Transfer</span>
            </button>
          </div>
        </div>

        <!-- Filter Card: Exact User Application UI Style (2 Balanced Rows × 4 Columns) -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>

            <!-- Filter Controls: Reset & Toggle Open/Close -->
            <div class="inline-flex items-center" style="gap: 8px; display: inline-flex;">
              <button type="button" id="hontrack-top-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-7 h-7 min-w-[28px] min-h-[28px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-none transition-colors cursor-pointer select-none" style="width: 28px; height: 28px; min-width: 28px; min-height: 28px; border-radius: 0; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Reset all filters" aria-label="Reset all filters">
                <svg class="w-4 h-4 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>

              <button type="button" id="hontrack-top-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-7 h-7 min-w-[28px] min-h-[28px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-none transition-colors cursor-pointer select-none" style="width: 28px; height: 28px; min-width: 28px; min-height: 28px; border-radius: 0; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Hide Filter" aria-label="Hide Filter">
                <svg class="w-4 h-4 text-current dt-top-filter-toggle-icon transform transition-transform duration-200" id="hontrack-top-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <!-- Collapsible Filter Inputs Grid (2 Balanced Rows × 4 Columns) -->
          <div id="hontrack-top-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs transition-all duration-200">
            <!-- 1. PRODUCTION PLANT -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT</label>
              <select id="hnt-filter-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">All Production Plants</option>
                <option value="DFL UNIT-5 (JPT)">DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
                <option value="DFL UNIT-6 (JPT-II)">DFL UNIT-6 (JPT-II)</option>
                <option value="DFL UNIT-2 (KKD)">DFL UNIT-2 (KKD)</option>
              </select>
            </div>

            <!-- 2. TRANSFER PLANT -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRANSFER PLANT</label>
              <select id="hnt-filter-transfer-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#00A4B7]">
                <option value="ALL">All Transfer Plants</option>
                <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-5 (JPT)">DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
                <option value="DFL UNIT-6 (JPT-II)">DFL UNIT-6 (JPT-II)</option>
                <option value="DFL UNIT-2 (KKD)">DFL UNIT-2 (KKD)</option>
              </select>
            </div>

            <!-- 3. ARRIVAL DATE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL DATE</label>
              <div class="erp-date-wrapper">
                <input type="date" id="hnt-filter-arrival-date" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 4. TRANSFER DATE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRANSFER DATE</label>
              <div class="erp-date-wrapper">
                <input type="date" id="hnt-filter-transfer-date" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 5. TRACK ID -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRACK ID</label>
              <input type="text" id="hnt-filter-trackid" placeholder="Filter Track ID..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono" />
            </div>

            <!-- 6. ARRIVAL CODE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL CODE</label>
              <select id="hnt-filter-arrival-code" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Arrival Codes</option>
                <option value="LOT-2026-00125">LOT-2026-00125</option>
                <option value="LOT-2026-00126">LOT-2026-00126</option>
                <option value="LOT-2026-00127">LOT-2026-00127</option>
                <option value="LOT-2026-00128">LOT-2026-00128</option>
                <option value="LOT-2026-00129">LOT-2026-00129</option>
                <option value="LOT-2026-00130">LOT-2026-00130</option>
              </select>
            </div>

            <!-- 7. HON COUNT -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">HON COUNT</label>
              <input type="text" id="hnt-filter-hon-count" placeholder="Filter HON Count..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 8. Search Button Slot (Compact, Natural Width) -->
            <div class="flex items-end">
              <button type="button" id="hnt-filter-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Data Table Container -->
        <div id="hon-transfer-table-container"></div>
      </div>
    `;

    // Button Add Transfer Handler
    document.getElementById('btn-add-hon-transfer')?.addEventListener('click', () => {
      this.showAddHonTransferModal(container);
    });

    // Toggle filter open/close handler
    const toggleBtn = document.getElementById('hontrack-top-toggle-btn');
    toggleBtn?.addEventListener('click', () => {
      const body = document.getElementById('hontrack-top-filter-body');
      const icon = document.getElementById('hontrack-top-toggle-icon');
      if (body) {
        body.classList.toggle('hidden');
        if (body.classList.contains('hidden')) {
          toggleBtn.title = 'Show Filter';
          icon?.classList.add('-rotate-90');
        } else {
          toggleBtn.title = 'Hide Filter';
          icon?.classList.remove('-rotate-90');
        }
      }
    });

    // Reset filter handler
    const resetBtn = document.getElementById('hontrack-top-reset-btn');
    resetBtn?.addEventListener('click', () => {
      if (document.getElementById('hnt-filter-plant')) document.getElementById('hnt-filter-plant').value = 'ALL';
      if (document.getElementById('hnt-filter-transfer-plant')) document.getElementById('hnt-filter-transfer-plant').value = 'ALL';
      if (document.getElementById('hnt-filter-arrival-date')) document.getElementById('hnt-filter-arrival-date').value = '';
      if (document.getElementById('hnt-filter-transfer-date')) document.getElementById('hnt-filter-transfer-date').value = '';
      if (document.getElementById('hnt-filter-trackid')) document.getElementById('hnt-filter-trackid').value = '';
      if (document.getElementById('hnt-filter-arrival-code')) document.getElementById('hnt-filter-arrival-code').value = 'ALL';
      if (document.getElementById('hnt-filter-hon-count')) document.getElementById('hnt-filter-hon-count').value = '';

      renderTable(this.state.honTransfers);
      Toast.show('Filters reset', 'info');
    });

    // Main Table render function
    const renderTable = (data) => {
      new DataTable({
        containerId: 'hon-transfer-table-container',
        data: data,
        keyField: 'trackId',
        tableTitle: 'HON Quantity Transfer Registry',
        searchable: true,
        exportable: true,
        pageSize: 10,
        columns: [
          // 1. S.No
          {
            field: 'sNo',
            header: 'S.No',
            render: (v, row, idx) => `<span class="text-[#5E6C84] font-semibold">${v || (idx + 1)}</span>`
          },
          // 2. Track ID
          {
            field: 'trackId',
            header: 'Track ID',
            render: (v) => `<span class="font-mono font-bold text-[#00A4B7] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BAE6FD] whitespace-nowrap">${v}</span>`
          },
          // 3. Arrival Code
          {
            field: 'arrivalCode',
            header: 'Arrival Code',
            render: (v) => `<span class="font-bold text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 4. Production Plant
          {
            field: 'productionPlant',
            header: 'Production Plant',
            render: (v) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 5. Transfer Plant
          {
            field: 'transferPlant',
            header: 'Transfer Plant',
            render: (v) => `<span class="font-bold text-[#008DA6] bg-[#E6FCFF] px-2 py-0.5 rounded border border-[#B6F0F7] whitespace-nowrap">${v}</span>`
          },
          // 6. Arrival Date
          {
            field: 'arrivalDate',
            header: 'Arrival Date',
            render: (v) => `<span class="text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 7. Transfer Date
          {
            field: 'transferDate',
            header: 'Transfer Date',
            render: (v) => `<span class="text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 8. HON Count
          {
            field: 'honCount',
            header: 'HON Count',
            render: (v) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 9. HON Weight
          {
            field: 'honWeight',
            header: 'HON Weight',
            render: (v) => `<span class="font-bold text-[#172B4D] whitespace-nowrap">${Number(v).toLocaleString()} KG</span>`
          },
          // 10. Weight
          {
            field: 'weight',
            header: 'Weight',
            render: (v) => `<span class="font-extrabold text-[#00875A] whitespace-nowrap">${Number(v).toLocaleString()} KG</span>`
          }
          // 11. Actions (appended and centered)
        ],
        actions: [
          {
            label: 'Edit',
            icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: (row) => this.showEditHonTransferModal(row, container)
          },
          {
            label: 'Delete',
            icon: `<svg class="w-4 h-4 text-[#FF5630]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Delete HON QTY Transfer',
                message: `Are you sure you want to delete HON Transfer record <strong class="text-[#00A4B7]">${row.trackId}</strong>? This action cannot be undone.`,
                confirmText: 'Yes, Delete',
                cancelText: 'Cancel',
                isDestructive: true,
                onConfirm: () => {
                  const idx = this.state.honTransfers.findIndex(r => r.id === row.id || r.trackId === row.trackId);
                  if (idx !== -1) {
                    this.state.honTransfers.splice(idx, 1);
                    renderTable(this.state.honTransfers);
                    Toast.show(`HON QTY Transfer ${row.trackId} deleted`, 'info');
                  }
                }
              });
            }
          }
        ],
        onRowClick: (row) => this.showHonTransferDetailsModal(row)
      });
    };

    renderTable(this.state.honTransfers);

    // Search button event binding
    const searchBtn = document.getElementById('hnt-filter-search-btn');
    searchBtn?.addEventListener('click', () => {
      const plantVal = document.getElementById('hnt-filter-plant')?.value || 'ALL';
      const tfPlantVal = document.getElementById('hnt-filter-transfer-plant')?.value || 'ALL';
      const arrDateVal = document.getElementById('hnt-filter-arrival-date')?.value || '';
      const tfDateVal = document.getElementById('hnt-filter-transfer-date')?.value || '';
      const trackIdVal = (document.getElementById('hnt-filter-trackid')?.value || '').toLowerCase().trim();
      const arrCodeVal = document.getElementById('hnt-filter-arrival-code')?.value || 'ALL';
      const honCountVal = (document.getElementById('hnt-filter-hon-count')?.value || '').toLowerCase().trim();

      const filtered = this.state.honTransfers.filter(r => {
        if (plantVal !== 'ALL' && r.productionPlant !== plantVal) return false;
        if (tfPlantVal !== 'ALL' && r.transferPlant !== tfPlantVal) return false;
        if (arrDateVal && r.arrivalDate && !r.arrivalDate.includes(arrDateVal)) return false;
        if (tfDateVal && r.transferDate && !r.transferDate.includes(tfDateVal)) return false;
        if (trackIdVal && !String(r.trackId).toLowerCase().includes(trackIdVal)) return false;
        if (arrCodeVal !== 'ALL' && r.arrivalCode !== arrCodeVal) return false;
        if (honCountVal && !String(r.honCount).toLowerCase().includes(honCountVal)) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Applied filters: ${filtered.length} transfer record(s) matched`, 'info');
    });
  },

  // Show Add HON QTY Transfer Modal
  showAddHonTransferModal(container) {
    const nextTrackId = `TRK-TRF-2026-${Math.floor(410 + Math.random() * 80)}`;

    Modal.open({
      title: 'Add HON QTY Transfer After VA',
      size: 'lg',
      content: `
        <form id="form-add-hon-transfer" class="space-y-4" onsubmit="return false;">
          <!-- 9 Form Input Fields -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            <!-- 1. PRODUCTION PLANT * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT <span class="text-[#DE350B]">*</span></label>
              <select id="nhnt-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="DFL UNIT-5 (JPT)" selected>DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
                <option value="DFL UNIT-6 (JPT-II)">DFL UNIT-6 (JPT-II)</option>
                <option value="DFL UNIT-2 (KKD)">DFL UNIT-2 (KKD)</option>
              </select>
            </div>

            <!-- 2. TRANSFER PLANT * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRANSFER PLANT <span class="text-[#DE350B]">*</span></label>
              <select id="nhnt-transfer-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#00A4B7] focus:outline-none focus:border-[#0284C7]">
                <option value="DFL UNIT-3 (PSP)" selected>DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-5 (JPT)">DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
                <option value="DFL UNIT-6 (JPT-II)">DFL UNIT-6 (JPT-II)</option>
                <option value="DFL UNIT-2 (KKD)">DFL UNIT-2 (KKD)</option>
              </select>
            </div>

            <!-- 3. TRACK ID * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRACK ID <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="nhnt-trackid" value="${nextTrackId}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 4. ARRIVAL DATE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" id="nhnt-arrival-date" value="2026-10-07" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 5. TRANSFER DATE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRANSFER DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" id="nhnt-transfer-date" value="2026-10-07" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 6. ARRIVAL CODE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL CODE <span class="text-[#DE350B]">*</span></label>
              <select id="nhnt-arrival-code" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="LOT-2026-00125" selected>LOT-2026-00125</option>
                <option value="LOT-2026-00126">LOT-2026-00126</option>
                <option value="LOT-2026-00127">LOT-2026-00127</option>
                <option value="LOT-2026-00128">LOT-2026-00128</option>
                <option value="LOT-2026-00129">LOT-2026-00129</option>
                <option value="LOT-2026-00130">LOT-2026-00130</option>
              </select>
            </div>

            <!-- 7. HON COUNT * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">HON COUNT <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="nhnt-hon-count" value="42 Count" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 8. HON WEIGHT * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">HON WEIGHT <span class="text-[#DE350B]">*</span></label>
              <input type="number" id="nhnt-hon-weight" value="1200" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-bold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 9. WEIGHT * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">WEIGHT <span class="text-[#DE350B]">*</span></label>
              <input type="number" id="nhnt-weight" value="1180" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-extrabold text-[#00875A] focus:outline-none focus:border-[#0284C7]" />
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        {
          label: 'Save & Transfer',
          type: 'primary',
          onClick: (m) => {
            const plant = document.getElementById('nhnt-plant')?.value || 'DFL UNIT-5 (JPT)';
            const tfPlant = document.getElementById('nhnt-transfer-plant')?.value || 'DFL UNIT-3 (PSP)';
            const trackId = document.getElementById('nhnt-trackid')?.value || nextTrackId;
            const arrDate = document.getElementById('nhnt-arrival-date')?.value || '2026-10-07';
            const tfDate = document.getElementById('nhnt-transfer-date')?.value || '2026-10-07';
            const arrCode = document.getElementById('nhnt-arrival-code')?.value || 'LOT-2026-00125';
            const honCount = document.getElementById('nhnt-hon-count')?.value || '42 Count';
            const honWeight = parseFloat(document.getElementById('nhnt-hon-weight')?.value) || 1200;
            const weight = parseFloat(document.getElementById('nhnt-weight')?.value) || 1180;

            Modal.confirm({
              title: 'Confirm HON QTY Transfer',
              message: `Are you sure you want to dispatch and transfer <strong>${weight.toLocaleString()} KG</strong> of lot <strong class="text-[#00A4B7]">${trackId}</strong> from <strong>${plant}</strong> to <strong>${tfPlant}</strong>?`,
              confirmText: 'Yes, Confirm Transfer',
              cancelText: 'Cancel',
              isDestructive: false,
              onConfirm: () => {
                const newEntry = {
                  sNo: 1,
                  id: trackId,
                  trackId: trackId,
                  productionPlant: plant,
                  transferPlant: tfPlant,
                  arrivalDate: arrDate,
                  transferDate: tfDate,
                  arrivalCode: arrCode,
                  honCount: honCount,
                  honWeight: honWeight,
                  weight: weight,
                  status: 'TRANSFERRED'
                };

                this.state.honTransfers.forEach(r => { if (r.sNo) r.sNo += 1; });
                this.state.honTransfers.unshift(newEntry);

                Toast.show(`HON QTY Transfer ${trackId} registered successfully`, 'success', 'Transfer Dispatched');
                this.renderHonQtyTransferScreen(container);
              }
            });
          }
        }
      ]
    });
  },

  // Show Edit HON QTY Transfer Modal
  showEditHonTransferModal(row, container) {
    Modal.open({
      title: `Edit HON QTY Transfer: ${row.trackId}`,
      size: 'lg',
      content: `
        <form id="form-edit-hon-transfer" class="space-y-4" onsubmit="return false;">
          <!-- 9 Form Input Fields -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            <!-- 1. PRODUCTION PLANT * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PRODUCTION PLANT <span class="text-[#DE350B]">*</span></label>
              <select id="ehnt-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="DFL UNIT-5 (JPT)" ${row.productionPlant === 'DFL UNIT-5 (JPT)' ? 'selected' : ''}>DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)" ${row.productionPlant === 'DFL UNIT-3 (PSP)' ? 'selected' : ''}>DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)" ${row.productionPlant === 'DFL UNIT-4 (PND)' ? 'selected' : ''}>DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)" ${row.productionPlant === 'DFL UNIT-1 (VSP)' ? 'selected' : ''}>DFL UNIT-1 (VSP)</option>
                <option value="DFL UNIT-6 (JPT-II)" ${row.productionPlant === 'DFL UNIT-6 (JPT-II)' ? 'selected' : ''}>DFL UNIT-6 (JPT-II)</option>
                <option value="DFL UNIT-2 (KKD)" ${row.productionPlant === 'DFL UNIT-2 (KKD)' ? 'selected' : ''}>DFL UNIT-2 (KKD)</option>
              </select>
            </div>

            <!-- 2. TRANSFER PLANT * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRANSFER PLANT <span class="text-[#DE350B]">*</span></label>
              <select id="ehnt-transfer-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#00A4B7] focus:outline-none focus:border-[#0284C7]">
                <option value="DFL UNIT-3 (PSP)" ${row.transferPlant === 'DFL UNIT-3 (PSP)' ? 'selected' : ''}>DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-5 (JPT)" ${row.transferPlant === 'DFL UNIT-5 (JPT)' ? 'selected' : ''}>DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-4 (PND)" ${row.transferPlant === 'DFL UNIT-4 (PND)' ? 'selected' : ''}>DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)" ${row.transferPlant === 'DFL UNIT-1 (VSP)' ? 'selected' : ''}>DFL UNIT-1 (VSP)</option>
                <option value="DFL UNIT-6 (JPT-II)" ${row.transferPlant === 'DFL UNIT-6 (JPT-II)' ? 'selected' : ''}>DFL UNIT-6 (JPT-II)</option>
                <option value="DFL UNIT-2 (KKD)" ${row.transferPlant === 'DFL UNIT-2 (KKD)' ? 'selected' : ''}>DFL UNIT-2 (KKD)</option>
              </select>
            </div>

            <!-- 3. TRACK ID * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRACK ID <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="ehnt-trackid" value="${row.trackId || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 4. ARRIVAL DATE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" id="ehnt-arrival-date" value="${row.arrivalDate || '2026-10-06'}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 5. TRANSFER DATE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TRANSFER DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" id="ehnt-transfer-date" value="${row.transferDate || '2026-10-07'}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 6. ARRIVAL CODE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ARRIVAL CODE <span class="text-[#DE350B]">*</span></label>
              <select id="ehnt-arrival-code" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="LOT-2026-00125" ${row.arrivalCode === 'LOT-2026-00125' ? 'selected' : ''}>LOT-2026-00125</option>
                <option value="LOT-2026-00126" ${row.arrivalCode === 'LOT-2026-00126' ? 'selected' : ''}>LOT-2026-00126</option>
                <option value="LOT-2026-00127" ${row.arrivalCode === 'LOT-2026-00127' ? 'selected' : ''}>LOT-2026-00127</option>
                <option value="LOT-2026-00128" ${row.arrivalCode === 'LOT-2026-00128' ? 'selected' : ''}>LOT-2026-00128</option>
                <option value="LOT-2026-00129" ${row.arrivalCode === 'LOT-2026-00129' ? 'selected' : ''}>LOT-2026-00129</option>
                <option value="LOT-2026-00130" ${row.arrivalCode === 'LOT-2026-00130' ? 'selected' : ''}>LOT-2026-00130</option>
              </select>
            </div>

            <!-- 7. HON COUNT * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">HON COUNT <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="ehnt-hon-count" value="${row.honCount || '42 Count'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 8. HON WEIGHT * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">HON WEIGHT <span class="text-[#DE350B]">*</span></label>
              <input type="number" id="ehnt-hon-weight" value="${row.honWeight || 1200}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-bold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 9. WEIGHT * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">WEIGHT <span class="text-[#DE350B]">*</span></label>
              <input type="number" id="ehnt-weight" value="${row.weight || 1180}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-extrabold text-[#00875A] focus:outline-none focus:border-[#0284C7]" />
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        {
          label: 'Save Changes',
          type: 'primary',
          onClick: (m) => {
            const plant = document.getElementById('ehnt-plant')?.value || row.productionPlant;
            const tfPlant = document.getElementById('ehnt-transfer-plant')?.value || row.transferPlant;
            const trackId = document.getElementById('ehnt-trackid')?.value || row.trackId;
            const arrDate = document.getElementById('ehnt-arrival-date')?.value || row.arrivalDate;
            const tfDate = document.getElementById('ehnt-transfer-date')?.value || row.transferDate;
            const arrCode = document.getElementById('ehnt-arrival-code')?.value || row.arrivalCode;
            const honCount = document.getElementById('ehnt-hon-count')?.value || row.honCount;
            const honWeight = parseFloat(document.getElementById('ehnt-hon-weight')?.value) || row.honWeight;
            const weight = parseFloat(document.getElementById('ehnt-weight')?.value) || row.weight;

            Modal.confirm({
              title: 'Confirm Modifications',
              message: `Are you sure you want to update HON Transfer record <strong class="text-[#00A4B7]">${trackId}</strong>?`,
              confirmText: 'Save Changes',
              cancelText: 'Cancel',
              isDestructive: false,
              onConfirm: () => {
                row.productionPlant = plant;
                row.transferPlant = tfPlant;
                row.trackId = trackId;
                row.id = trackId;
                row.arrivalDate = arrDate;
                row.transferDate = tfDate;
                row.arrivalCode = arrCode;
                row.honCount = honCount;
                row.honWeight = honWeight;
                row.weight = weight;

                Toast.show(`HON QTY Transfer ${row.trackId} updated successfully`, 'success');
                this.renderHonQtyTransferScreen(container);
              }
            });
          }
        }
      ]
    });
  },

  // Show Details Modal (Row click)
  showHonTransferDetailsModal(row) {
    Modal.open({
      title: `HON QTY Transfer Details: ${row.trackId}`,
      size: 'lg',
      content: `
        <div class="space-y-4 text-xs">
          <!-- Top summary badge card -->
          <div class="bg-[#F0F9FF] border border-[#BAE6FD] rounded-lg p-3.5 flex items-center justify-between">
            <div>
              <span class="text-[11px] font-bold text-[#0284C7] uppercase tracking-wider block">Transfer Track Code</span>
              <span class="text-base font-mono font-bold text-[#0C4A6E] mt-0.5 block">${row.trackId}</span>
            </div>
            <div class="text-right">
              <span class="lozenge lozenge-success">${row.status || 'TRANSFERRED'}</span>
              <span class="text-[11px] text-[#5E6C84] block mt-1">Dispatched: ${row.transferDate}</span>
            </div>
          </div>

          <!-- Key Details Grid (9 Fields) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-[#F4F5F7] p-3 rounded-lg border border-[#DFE1E6]">
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Production Plant</span>
              <span class="font-semibold text-[#172B4D] block mt-0.5">${row.productionPlant}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Transfer Plant</span>
              <span class="font-bold text-[#008DA6] block mt-0.5">${row.transferPlant}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Arrival Code</span>
              <span class="font-bold text-[#172B4D] block mt-0.5">${row.arrivalCode}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Arrival Date</span>
              <span class="font-medium text-[#172B4D] block mt-0.5">${row.arrivalDate}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Transfer Date</span>
              <span class="font-medium text-[#172B4D] block mt-0.5">${row.transferDate}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">HON Count</span>
              <span class="font-semibold text-[#172B4D] block mt-0.5">${row.honCount}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">HON Weight</span>
              <span class="font-bold text-[#172B4D] block mt-0.5">${Number(row.honWeight).toLocaleString()} KG</span>
            </div>
            <div class="sm:col-span-2">
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Transfer Weight</span>
              <span class="font-extrabold text-[#00875A] text-sm block mt-0.5">${Number(row.weight).toLocaleString()} KG</span>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: (m) => m.close() }
      ]
    });
  },

  // =========================================================================
  // 1. CHEMICAL POS SCREEN (CHEMICAL SCREENS TAB 1)
  // =========================================================================
  renderChemicalPosScreen(container) {
    container.innerHTML = `
      <div class="space-y-4">
        <!-- Top Action Bar (No Subheading) -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-0">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">Chemical Pos</h1>
          </div>
          <div>
            <button type="button" id="btn-create-chem-po" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer border-0">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Create Chemical PO</span>
            </button>
          </div>
        </div>

        <!-- Filter Card: 5 Specified Filter/Search Fields (SUPPLIER, PO NO, CHEMICAL, PORT, YEAR) -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
            </div>

            <!-- Filter Controls: Reset & Toggle Open/Close -->
            <div class="inline-flex items-center" style="gap: 8px; display: inline-flex;">
              <button type="button" id="cpo-top-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-7 h-7 min-w-[28px] min-h-[28px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-none transition-colors cursor-pointer select-none" style="width: 28px; height: 28px; min-width: 28px; min-height: 28px; border-radius: 0; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Reset all filters" aria-label="Reset all filters">
                <svg class="w-4 h-4 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>

              <button type="button" id="cpo-top-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-7 h-7 min-w-[28px] min-h-[28px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#0284C7] text-[#334155] hover:text-[#0284C7] rounded-none transition-colors cursor-pointer select-none" style="width: 28px; height: 28px; min-width: 28px; min-height: 28px; border-radius: 0; border: 1px solid #CBD5E1; background: #ffffff; color: #334155; display: inline-flex; align-items: center; justify-content: center; padding: 0;" title="Hide Filter" aria-label="Hide Filter">
                <svg class="w-4 h-4 text-current dt-top-filter-toggle-icon transform transition-transform duration-200" id="cpo-top-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <!-- Collapsible Filter Inputs Grid (2 Balanced Rows × 3 Columns) -->
          <div id="cpo-top-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs transition-all duration-200">
            <!-- 1. SUPPLIER -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SUPPLIER</label>
              <select id="cpo-filter-supplier" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">All Suppliers</option>
                <option value="Penta Chemicals Corp">Penta Chemicals Corp</option>
                <option value="Godavari BioTech Supplies">Godavari BioTech Supplies</option>
                <option value="Delta Water Technologies">Delta Water Technologies</option>
                <option value="AquaTech Solutions">AquaTech Solutions</option>
                <option value="Alpha Chemicals Ltd">Alpha Chemicals Ltd</option>
              </select>
            </div>

            <!-- 2. PO NO -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PO NO</label>
              <input type="text" id="cpo-filter-po-no" placeholder="Filter PO number..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono" />
            </div>

            <!-- 3. CHEMICAL -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">CHEMICAL</label>
              <select id="cpo-filter-chem" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Chemicals</option>
                <option value="Sodium Tripolyphosphate (STPP)">Sodium Tripolyphosphate (STPP)</option>
                <option value="Sodium Metabisulphite (SMS)">Sodium Metabisulphite (SMS)</option>
                <option value="Food-Grade Chlorine Powder">Food-Grade Chlorine Powder</option>
                <option value="Non-Phosphate Moisture Retainer">Non-Phosphate Moisture Retainer</option>
                <option value="Citric Acid Anhydrous">Citric Acid Anhydrous</option>
              </select>
            </div>

            <!-- 4. PORT -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PORT</label>
              <select id="cpo-filter-port" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Ports</option>
                <option value="Visakhapatnam Port (VPT)">Visakhapatnam Port (VPT)</option>
                <option value="Kakinada Deepwater Port">Kakinada Deepwater Port</option>
                <option value="Chennai Port">Chennai Port</option>
                <option value="Krishnapatnam Port">Krishnapatnam Port</option>
              </select>
            </div>

            <!-- 5. YEAR -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">YEAR</label>
              <select id="cpo-filter-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Years</option>
                <option value="2026" selected>2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
              </select>
            </div>

            <!-- 6. Search Button Slot (Compact, Natural Width) -->
            <div class="flex items-end">
              <button type="button" id="cpo-filter-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Data Table Container -->
        <div id="chem-pos-table-container"></div>
      </div>
    `;

    // Button Create Chemical PO Handler
    document.getElementById('btn-create-chem-po')?.addEventListener('click', () => {
      this.showCreateChemicalPoModal(container);
    });

    // Toggle filter open/close handler
    const toggleBtn = document.getElementById('cpo-top-toggle-btn');
    toggleBtn?.addEventListener('click', () => {
      const body = document.getElementById('cpo-top-filter-body');
      const icon = document.getElementById('cpo-top-toggle-icon');
      if (body) {
        body.classList.toggle('hidden');
        if (body.classList.contains('hidden')) {
          toggleBtn.title = 'Show Filter';
          icon?.classList.add('-rotate-90');
        } else {
          toggleBtn.title = 'Hide Filter';
          icon?.classList.remove('-rotate-90');
        }
      }
    });

    // Reset filter handler
    const resetBtn = document.getElementById('cpo-top-reset-btn');
    resetBtn?.addEventListener('click', () => {
      if (document.getElementById('cpo-filter-supplier')) document.getElementById('cpo-filter-supplier').value = 'ALL';
      if (document.getElementById('cpo-filter-po-no')) document.getElementById('cpo-filter-po-no').value = '';
      if (document.getElementById('cpo-filter-chem')) document.getElementById('cpo-filter-chem').value = 'ALL';
      if (document.getElementById('cpo-filter-port')) document.getElementById('cpo-filter-port').value = 'ALL';
      if (document.getElementById('cpo-filter-year')) document.getElementById('cpo-filter-year').value = 'ALL';

      renderTable(this.state.chemicalPos);
      Toast.show('Filters reset', 'info');
    });

    // Main Table render function
    const renderTable = (data) => {
      new DataTable({
        containerId: 'chem-pos-table-container',
        data: data,
        keyField: 'id',
        tableTitle: 'Chemical Purchase Orders Register',
        searchable: true,
        exportable: true,
        pageSize: 10,
        columns: [
          // 1. S.NO
          {
            field: 'sNo',
            header: 'S.NO',
            render: (v, row, idx) => `<span class="text-[#5E6C84] font-semibold">${v || (idx + 1)}</span>`
          },
          // 2. Supplier Name
          {
            field: 'supplierName',
            header: 'Supplier Name',
            render: (v) => `<span class="font-bold text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 3. PoNo
          {
            field: 'poNo',
            header: 'PoNo',
            render: (v) => `<span class="font-mono font-bold text-[#00A4B7] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BAE6FD] whitespace-nowrap">${v}</span>`
          },
          // 4. PO Date
          {
            field: 'poDate',
            header: 'PO Date',
            render: (v) => `<span class="text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 5. Chemicals
          {
            field: 'chemicals',
            header: 'Chemicals',
            render: (v) => `<span class="font-semibold text-[#172B4D]">${v}</span>`
          },
          // 6. Port Name
          {
            field: 'portName',
            header: 'Port Name',
            render: (v) => `<span class="text-[#5E6C84] whitespace-nowrap">${v}</span>`
          },
          // 7. Mode of Import
          {
            field: 'modeOfImport',
            header: 'Mode of Import',
            render: (v) => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F4F5F7] text-[#42526E] border border-[#DFE1E6] whitespace-nowrap">${v}</span>`
          },
          // 8. Quantity(Bags)
          {
            field: 'quantityBags',
            header: 'Quantity(Bags)',
            render: (v) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${v !== '-' && v !== '' && v != null && !isNaN(Number(v)) ? Number(v).toLocaleString() + ' Bags' : (v || '—')}</span>`
          },
          // 9. Quantity(KGs)
          {
            field: 'quantityKgs',
            header: 'Quantity(KGs)',
            render: (v) => `<span class="font-bold text-[#172B4D] whitespace-nowrap">${v !== '-' && v !== '' && v != null && !isNaN(Number(v)) ? Number(v).toLocaleString() + ' KG' : (v || '—')}</span>`
          },
          // 10. Total Amount
          {
            field: 'totalAmount',
            header: 'Total Amount',
            render: (v) => `<span class="font-extrabold text-[#00875A] whitespace-nowrap">${v !== '-' && v !== '' && v != null && !isNaN(Number(v)) ? '₹' + Number(v).toLocaleString('en-IN') : (v || '—')}</span>`
          },
          // 11. ETD Date
          {
            field: 'etdDate',
            header: 'ETD Date',
            render: (v) => `<span class="text-[#172B4D] whitespace-nowrap font-mono text-xs">${v}</span>`
          },
          // 12. ETA Date
          {
            field: 'etaDate',
            header: 'ETA Date',
            render: (v) => `<span class="text-[#0284C7] whitespace-nowrap font-mono text-xs font-semibold">${v}</span>`
          },
          // 13. Remarks
          {
            field: 'remarks',
            header: 'Remarks',
            render: (v) => `<span class="text-xs text-[#5E6C84] truncate max-w-[200px] block" title="${v}">${v || '—'}</span>`
          }
          // 14. Actions (appended and centered)
        ],
        actions: [
          {
            label: 'Edit',
            icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: (row) => this.showEditChemicalPoModal(row, container)
          },
          {
            label: 'Delete',
            icon: `<svg class="w-4 h-4 text-[#FF5630]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Delete Chemical PO',
                message: `Are you sure you want to delete PO <strong class="text-[#00A4B7]">${row.poNo}</strong> (${row.chemicals})? This action cannot be undone.`,
                confirmText: 'Yes, Delete',
                cancelText: 'Cancel',
                isDestructive: true,
                onConfirm: () => {
                  const idx = this.state.chemicalPos.findIndex(p => p.id === row.id || p.poNo === row.poNo);
                  if (idx !== -1) {
                    this.state.chemicalPos.splice(idx, 1);
                    renderTable(this.state.chemicalPos);
                    Toast.show(`Chemical PO ${row.poNo} deleted`, 'info');
                  }
                }
              });
            }
          }
        ],
        onRowClick: (row) => this.showChemicalPoDetailsModal(row)
      });
    };

    renderTable(this.state.chemicalPos);

    // Search button event binding
    document.getElementById('cpo-filter-search-btn')?.addEventListener('click', () => {
      const supVal = document.getElementById('cpo-filter-supplier')?.value || 'ALL';
      const noVal = (document.getElementById('cpo-filter-po-no')?.value || '').toLowerCase().trim();
      const chemVal = document.getElementById('cpo-filter-chem')?.value || 'ALL';
      const portVal = document.getElementById('cpo-filter-port')?.value || 'ALL';
      const yearVal = document.getElementById('cpo-filter-year')?.value || 'ALL';

      const filtered = this.state.chemicalPos.filter(r => {
        if (supVal !== 'ALL' && r.supplierName !== supVal) return false;
        if (noVal && !r.poNo.toLowerCase().includes(noVal)) return false;
        if (chemVal !== 'ALL' && r.chemicals !== chemVal) return false;
        if (portVal !== 'ALL' && r.portName !== portVal) return false;
        if (yearVal !== 'ALL' && (!r.year || !r.year.includes(yearVal)) && (!r.poDate || !r.poDate.includes(yearVal))) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Applied filters: ${filtered.length} chemical PO(s) matched`, 'info');
    });
  },

  // Show Create Chemical PO Modal
  showCreateChemicalPoModal(container) {
    const nextPo = `PO-CHM-2026-${Math.floor(100 + Math.random() * 890)}`;

    Modal.open({
      title: 'Create Chemical PO',
      size: 'md',
      content: `
        <form id="form-create-chem-po" class="space-y-3.5 text-xs" onsubmit="return false;">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <!-- 1. SUPPLIER * -->
            <div class="sm:col-span-2">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SUPPLIER <span class="text-[#DE350B]">*</span></label>
              <select id="ncpo-supplier" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="" disabled>-- Select Supplier --</option>
                <option value="Penta Chemicals Corp" selected>Penta Chemicals Corp</option>
                <option value="Godavari BioTech Supplies">Godavari BioTech Supplies</option>
                <option value="Delta Water Technologies">Delta Water Technologies</option>
                <option value="AquaTech Solutions">AquaTech Solutions</option>
                <option value="Alpha Chemicals Ltd">Alpha Chemicals Ltd</option>
              </select>
            </div>

            <!-- 2. PORT NAME -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PORT NAME</label>
              <select id="ncpo-port" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="">-- Select Port --</option>
                <option value="Visakhapatnam Port (VPT)" selected>Visakhapatnam Port (VPT)</option>
                <option value="Kakinada Deepwater Port">Kakinada Deepwater Port</option>
                <option value="Chennai Port">Chennai Port</option>
                <option value="Krishnapatnam Port">Krishnapatnam Port</option>
              </select>
            </div>

            <!-- 3. MODE OF IMPORT * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">MODE OF IMPORT <span class="text-[#DE350B]">*</span></label>
              <select id="ncpo-mode" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="Sea Freight (20FT FCL)" selected>Sea Freight (20FT FCL)</option>
                <option value="Sea Freight (LCL)">Sea Freight (LCL)</option>
                <option value="Coastal Shipping">Coastal Shipping</option>
                <option value="Air Cargo Express">Air Cargo Express</option>
              </select>
            </div>

            <!-- 4. PO NO * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PO NO <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="ncpo-po-no" value="${nextPo}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#0284C7]" placeholder="e.g. PO-CHM-2026-086" />
            </div>

            <!-- 5. PO DATE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PO DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" id="ncpo-po-date" value="2026-10-07" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded text-[#172B4D] focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 6. ETA DATE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ETA DATE</label>
              <div class="erp-date-wrapper">
                <input type="date" id="ncpo-eta" value="2026-10-16" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded text-[#172B4D] focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 7. ETD DATE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ETD DATE</label>
              <div class="erp-date-wrapper">
                <input type="date" id="ncpo-etd" value="2026-10-09" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded text-[#172B4D] focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 8. REMARKS -->
            <div class="sm:col-span-2">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">REMARKS</label>
              <input type="text" id="ncpo-remarks" placeholder="Enter remarks..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        {
          label: 'Create Chemical PO',
          type: 'primary',
          onClick: (m) => {
            const supplierName = document.getElementById('ncpo-supplier')?.value?.trim();
            const portName = document.getElementById('ncpo-port')?.value?.trim() || '-';
            const modeOfImport = document.getElementById('ncpo-mode')?.value?.trim();
            const poNo = document.getElementById('ncpo-po-no')?.value?.trim();
            const poDate = document.getElementById('ncpo-po-date')?.value?.trim();
            const etaDate = document.getElementById('ncpo-eta')?.value?.trim() || '-';
            const etdDate = document.getElementById('ncpo-etd')?.value?.trim() || '-';
            const remarks = document.getElementById('ncpo-remarks')?.value?.trim() || '-';

            if (!supplierName) {
              Toast.show('Please select a Supplier', 'warning');
              return;
            }
            if (!modeOfImport) {
              Toast.show('Please select a Mode of Import', 'warning');
              return;
            }
            if (!poNo) {
              Toast.show('Please enter PO No', 'warning');
              return;
            }
            if (!poDate) {
              Toast.show('Please select PO Date', 'warning');
              return;
            }

            Modal.confirm({
              title: 'Confirm Chemical PO',
              message: `Are you sure you want to create Chemical PO <strong class="text-[#00A4B7]">${poNo}</strong> for <strong>${supplierName}</strong>?`,
              confirmText: 'Yes, Create PO',
              cancelText: 'Cancel',
              isDestructive: false,
              onConfirm: () => {
                const newPo = {
                  sNo: 1,
                  id: poNo,
                  poNo: poNo,
                  supplierName: supplierName,
                  poDate: poDate,
                  chemicals: '-',
                  portName: portName,
                  modeOfImport: modeOfImport,
                  quantityBags: '-',
                  quantityKgs: '-',
                  totalAmount: '-',
                  etdDate: etdDate,
                  etaDate: etaDate,
                  remarks: remarks,
                  year: poDate ? poDate.substring(0, 4) : '2026',
                  status: 'APPROVED'
                };

                this.state.chemicalPos.forEach(p => { if (p.sNo) p.sNo += 1; });
                this.state.chemicalPos.unshift(newPo);

                Toast.show(`Chemical PO ${poNo} created successfully`, 'success', 'PO Created');
                this.renderChemicalPosScreen(container);
              }
            });
          }
        }
      ]
    });
  },

  // Show Edit Chemical PO Modal
  showEditChemicalPoModal(row, container) {
    Modal.open({
      title: `Edit Chemical PO: ${row.poNo}`,
      size: 'md',
      content: `
        <form id="form-edit-chem-po" class="space-y-3.5 text-xs" onsubmit="return false;">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <!-- 1. SUPPLIER * -->
            <div class="sm:col-span-2">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SUPPLIER <span class="text-[#DE350B]">*</span></label>
              <select id="ecpo-supplier" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="Penta Chemicals Corp" ${row.supplierName === 'Penta Chemicals Corp' ? 'selected' : ''}>Penta Chemicals Corp</option>
                <option value="Godavari BioTech Supplies" ${row.supplierName === 'Godavari BioTech Supplies' ? 'selected' : ''}>Godavari BioTech Supplies</option>
                <option value="Delta Water Technologies" ${row.supplierName === 'Delta Water Technologies' ? 'selected' : ''}>Delta Water Technologies</option>
                <option value="AquaTech Solutions" ${row.supplierName === 'AquaTech Solutions' ? 'selected' : ''}>AquaTech Solutions</option>
                <option value="Alpha Chemicals Ltd" ${row.supplierName === 'Alpha Chemicals Ltd' ? 'selected' : ''}>Alpha Chemicals Ltd</option>
              </select>
            </div>

            <!-- 2. PORT NAME -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PORT NAME</label>
              <select id="ecpo-port" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="">-- Select Port --</option>
                <option value="Visakhapatnam Port (VPT)" ${row.portName === 'Visakhapatnam Port (VPT)' ? 'selected' : ''}>Visakhapatnam Port (VPT)</option>
                <option value="Kakinada Deepwater Port" ${row.portName === 'Kakinada Deepwater Port' ? 'selected' : ''}>Kakinada Deepwater Port</option>
                <option value="Chennai Port" ${row.portName === 'Chennai Port' ? 'selected' : ''}>Chennai Port</option>
                <option value="Krishnapatnam Port" ${row.portName === 'Krishnapatnam Port' ? 'selected' : ''}>Krishnapatnam Port</option>
              </select>
            </div>

            <!-- 3. MODE OF IMPORT * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">MODE OF IMPORT <span class="text-[#DE350B]">*</span></label>
              <select id="ecpo-mode" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="Sea Freight (20FT FCL)" ${row.modeOfImport === 'Sea Freight (20FT FCL)' ? 'selected' : ''}>Sea Freight (20FT FCL)</option>
                <option value="Sea Freight (LCL)" ${row.modeOfImport === 'Sea Freight (LCL)' ? 'selected' : ''}>Sea Freight (LCL)</option>
                <option value="Coastal Shipping" ${row.modeOfImport === 'Coastal Shipping' ? 'selected' : ''}>Coastal Shipping</option>
                <option value="Air Cargo Express" ${row.modeOfImport === 'Air Cargo Express' ? 'selected' : ''}>Air Cargo Express</option>
              </select>
            </div>

            <!-- 4. PO NO * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PO NO <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="ecpo-po-no" value="${row.poNo || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 5. PO DATE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PO DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" id="ecpo-po-date" value="${row.poDate || ''}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded text-[#172B4D] focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 6. ETA DATE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ETA DATE</label>
              <div class="erp-date-wrapper">
                <input type="date" id="ecpo-eta" value="${row.etaDate && row.etaDate !== '-' ? row.etaDate : ''}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded text-[#172B4D] focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 7. ETD DATE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">ETD DATE</label>
              <div class="erp-date-wrapper">
                <input type="date" id="ecpo-etd" value="${row.etdDate && row.etdDate !== '-' ? row.etdDate : ''}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded text-[#172B4D] focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 8. REMARKS -->
            <div class="sm:col-span-2">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">REMARKS</label>
              <input type="text" id="ecpo-remarks" value="${row.remarks && row.remarks !== '-' ? row.remarks : ''}" placeholder="Enter remarks..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        {
          label: 'Save Changes',
          type: 'primary',
          onClick: (m) => {
            const supplierName = document.getElementById('ecpo-supplier')?.value?.trim() || row.supplierName;
            const portName = document.getElementById('ecpo-port')?.value?.trim() || row.portName;
            const modeOfImport = document.getElementById('ecpo-mode')?.value?.trim() || row.modeOfImport;
            const poNo = document.getElementById('ecpo-po-no')?.value?.trim() || row.poNo;
            const poDate = document.getElementById('ecpo-po-date')?.value?.trim() || row.poDate;
            const etaDate = document.getElementById('ecpo-eta')?.value?.trim() || row.etaDate;
            const etdDate = document.getElementById('ecpo-etd')?.value?.trim() || row.etdDate;
            const remarks = document.getElementById('ecpo-remarks')?.value?.trim() || row.remarks;

            if (!supplierName) {
              Toast.show('Please select a Supplier', 'warning');
              return;
            }
            if (!modeOfImport) {
              Toast.show('Please select a Mode of Import', 'warning');
              return;
            }
            if (!poNo) {
              Toast.show('Please enter PO No', 'warning');
              return;
            }
            if (!poDate) {
              Toast.show('Please select PO Date', 'warning');
              return;
            }

            Modal.confirm({
              title: 'Confirm Modifications',
              message: `Are you sure you want to update Chemical PO <strong class="text-[#00A4B7]">${poNo}</strong>?`,
              confirmText: 'Save Changes',
              cancelText: 'Cancel',
              isDestructive: false,
              onConfirm: () => {
                row.supplierName = supplierName;
                row.poNo = poNo;
                row.id = poNo;
                row.poDate = poDate;
                row.portName = portName;
                row.modeOfImport = modeOfImport;
                row.etdDate = etdDate;
                row.etaDate = etaDate;
                row.remarks = remarks;
                if (poDate) row.year = poDate.substring(0, 4);

                Toast.show(`Chemical PO ${row.poNo} updated successfully`, 'success');
                this.renderChemicalPosScreen(container);
              }
            });
          }
        }
      ]
    });
  },
  // Show Details Modal on Row Click
  showChemicalPoDetailsModal(row) {
    Modal.open({
      title: `Chemical PO Details: ${row.poNo}`,
      size: 'lg',
      content: `
        <div class="space-y-4 text-xs">
          <!-- Top summary badge card -->
          <div class="bg-[#F0F9FF] border border-[#BAE6FD] rounded-lg p-3.5 flex items-center justify-between">
            <div>
              <span class="text-[11px] font-bold text-[#0284C7] uppercase tracking-wider block">Chemical Purchase Order</span>
              <span class="text-base font-mono font-bold text-[#0C4A6E] mt-0.5 block">${row.poNo}</span>
            </div>
            <div class="text-right">
              <span class="lozenge lozenge-success">${row.status || 'APPROVED'}</span>
              <span class="text-[11px] text-[#5E6C84] block mt-1">PO Date: ${row.poDate}</span>
            </div>
          </div>

          <!-- Key Details Grid (13 Fields) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-[#F4F5F7] p-3 rounded-lg border border-[#DFE1E6]">
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Supplier Name</span>
              <span class="font-bold text-[#172B4D] block mt-0.5">${row.supplierName}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Chemicals</span>
              <span class="font-semibold text-[#172B4D] block mt-0.5">${row.chemicals}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Port Name</span>
              <span class="text-[#0284C7] font-semibold block mt-0.5">${row.portName}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Mode of Import</span>
              <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-white border border-[#DFE1E6] text-[#42526E] inline-block mt-0.5">${row.modeOfImport}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Quantity (Bags)</span>
              <span class="font-semibold text-[#172B4D] block mt-0.5">${row.quantityBags !== '-' && row.quantityBags != null && !isNaN(Number(row.quantityBags)) ? Number(row.quantityBags).toLocaleString() + ' Bags' : (row.quantityBags || '—')}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Quantity (KGs)</span>
              <span class="font-bold text-[#172B4D] block mt-0.5">${row.quantityKgs !== '-' && row.quantityKgs != null && !isNaN(Number(row.quantityKgs)) ? Number(row.quantityKgs).toLocaleString() + ' KG' : (row.quantityKgs || '—')}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Total Amount</span>
              <span class="font-extrabold text-[#00875A] text-sm block mt-0.5">${row.totalAmount !== '-' && row.totalAmount != null && !isNaN(Number(row.totalAmount)) ? '₹' + Number(row.totalAmount).toLocaleString('en-IN') : (row.totalAmount || '—')}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">ETD Date</span>
              <span class="font-mono text-[#172B4D] block mt-0.5">${row.etdDate}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">ETA Date</span>
              <span class="font-mono font-bold text-[#0284C7] block mt-0.5">${row.etaDate}</span>
            </div>
            <div class="sm:col-span-2 md:col-span-3">
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Remarks</span>
              <span class="text-[#334155] block mt-0.5 bg-white p-2 rounded border border-[#DFE1E6]">${row.remarks || 'No remarks recorded'}</span>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: (m) => m.close() }
      ]
    });
  },

  // =========================================================================
  // 2. RECEIVED CHEMICALS SCREEN (CHEMICAL SCREENS TAB 2)
  // =========================================================================
  renderReceivedChemicalsScreen(container) {
    container.innerHTML = `
      <div class="space-y-4">
        <!-- Top Action & Title Bar -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-0">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Received Chemicals</h1>
          </div>
          <div class="flex items-center gap-2">
            <button type="button" id="btn-receive-chem" class="btn-primary border-0 rounded-full px-4 py-2 text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Receive Chemicals</span>
            </button>
          </div>
        </div>

        <!-- Filter / Search Card -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D] mb-0">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center" style="gap: 8px;">
              <button type="button" id="rch-top-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-7 h-7 inline-flex items-center justify-center bg-white border border-[#CBD5E1] rounded-none cursor-pointer" title="Reset all filters">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>
              <button type="button" id="rch-top-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-7 h-7 inline-flex items-center justify-center bg-white border border-[#CBD5E1] rounded-none cursor-pointer" title="Hide Filter">
                <svg id="rch-top-toggle-icon" class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <div id="rch-top-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <!-- 1. PLANT -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PLANT</label>
              <select id="rch-filter-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Plants</option>
                <option value="DFL UNIT-5 (JPT)">DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
              </select>
            </div>

            <!-- 2. STATUS -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">STATUS</label>
              <select id="rch-filter-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Statuses</option>
                <option value="CLEARED">CLEARED</option>
                <option value="RECEIVED">RECEIVED</option>
                <option value="CUSTOMS_HOLD">CUSTOMS_HOLD</option>
              </select>
            </div>

            <!-- 3. YEAR -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">YEAR</label>
              <select id="rch-filter-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Years</option>
                <option value="2026" selected>2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
              </select>
            </div>

            <!-- Search Button -->
            <div class="flex items-end">
              <button type="button" id="rch-filter-search-btn" class="dt-top-filter-search-btn btn-primary border-0 px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Table Container -->
        <div id="chem-received-table-container"></div>
      </div>
    `;

    // Bind Receive Chemicals Button
    document.getElementById('btn-receive-chem')?.addEventListener('click', () => {
      this.showReceiveChemicalModal(container);
    });

    // Toggle filter open/close handler
    const toggleBtn = document.getElementById('rch-top-toggle-btn');
    toggleBtn?.addEventListener('click', () => {
      const body = document.getElementById('rch-top-filter-body');
      const icon = document.getElementById('rch-top-toggle-icon');
      if (body) {
        body.classList.toggle('hidden');
        if (body.classList.contains('hidden')) {
          toggleBtn.title = 'Show Filter';
          icon?.classList.add('-rotate-90');
        } else {
          toggleBtn.title = 'Hide Filter';
          icon?.classList.remove('-rotate-90');
        }
      }
    });

    // Reset filter handler
    const resetBtn = document.getElementById('rch-top-reset-btn');
    resetBtn?.addEventListener('click', () => {
      if (document.getElementById('rch-filter-plant')) document.getElementById('rch-filter-plant').value = 'ALL';
      if (document.getElementById('rch-filter-status')) document.getElementById('rch-filter-status').value = 'ALL';
      if (document.getElementById('rch-filter-year')) document.getElementById('rch-filter-year').value = 'ALL';

      renderTable(this.state.receivedChemicals);
      Toast.show('Filters reset', 'info');
    });

    const renderTable = (data) => {
      new DataTable({
        containerId: 'chem-received-table-container',
        data: data,
        keyField: 'id',
        tableTitle: 'Received Chemicals Consignment Log',
        searchable: true,
        exportable: true,
        pageSize: 10,
        actionsTitle: 'Action',
        columns: [
          // 1. S.NO
          {
            field: 'sNo',
            header: 'S.NO',
            render: (v, row, idx) => `<span class="text-[#5E6C84] font-semibold">${v || (idx + 1)}</span>`
          },
          // 2. PoNo
          {
            field: 'poNo',
            header: 'PoNo',
            render: (v) => `<span class="font-mono font-bold text-[#00A4B7] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BAE6FD] whitespace-nowrap">${v}</span>`
          },
          // 3. Chemical
          {
            field: 'chemical',
            header: 'Chemical',
            render: (v) => `<span class="font-bold text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 4. BL No
          {
            field: 'blNo',
            header: 'BL No',
            render: (v) => `<span class="font-mono text-xs font-semibold text-[#172B4D] whitespace-nowrap">${v || '—'}</span>`
          },
          // 5. Container No
          {
            field: 'containerNo',
            header: 'Container No',
            render: (v) => `<span class="font-mono text-xs text-[#0284C7] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BAE6FD] whitespace-nowrap">${v || '—'}</span>`
          },
          // 6. Received Bags
          {
            field: 'receivedBags',
            header: 'Received Bags',
            render: (v) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${v !== '-' && v !== '' && v != null && !isNaN(Number(v)) ? Number(v).toLocaleString() + ' Bags' : (v || '—')}</span>`
          },
          // 7. Received Quantity
          {
            field: 'receivedQuantity',
            header: 'Received Quantity',
            render: (v) => `<span class="font-extrabold text-[#00875A] whitespace-nowrap">${v !== '-' && v !== '' && v != null && !isNaN(Number(v)) ? Number(v).toLocaleString() + ' KG' : (v || '—')}</span>`
          },
          // 8. Bill of Entry No
          {
            field: 'billOfEntryNo',
            header: 'Bill of Entry No',
            render: (v) => `<span class="font-mono text-xs text-[#5E6C84] whitespace-nowrap">${v || '—'}</span>`
          },
          // 9. Bill of Entry Date
          {
            field: 'billOfEntryDate',
            header: 'Bill of Entry Date',
            render: (v) => `<span class="text-[#172B4D] whitespace-nowrap">${v || '—'}</span>`
          },
          // 10. Cleared Date
          {
            field: 'clearedDate',
            header: 'Cleared Date',
            render: (v) => `<span class="text-[#0284C7] whitespace-nowrap font-medium">${v || '—'}</span>`
          },
          // 11. Balance Bags
          {
            field: 'balanceBags',
            header: 'Balance Bags',
            render: (v) => `<span class="font-semibold text-[#FF8B00] whitespace-nowrap">${v !== '-' && v !== '' && v != null && !isNaN(Number(v)) ? Number(v).toLocaleString() + ' Bags' : (v || '—')}</span>`
          },
          // 12. Balance Quantity
          {
            field: 'balanceQuantity',
            header: 'Balance Quantity',
            render: (v) => `<span class="font-bold text-[#DE350B] whitespace-nowrap">${v !== '-' && v !== '' && v != null && !isNaN(Number(v)) ? Number(v).toLocaleString() + ' KG' : (v || '—')}</span>`
          },
          // 13. Status
          {
            field: 'status',
            header: 'Status',
            render: (v) => {
              const lozClass = v === 'CLEARED' ? 'lozenge-success' : (v === 'RECEIVED' ? 'lozenge-info' : 'lozenge-warning');
              return `<span class="lozenge ${lozClass}">${v || 'RECEIVED'}</span>`;
            }
          }
          // 14. Action (centered Actions column)
        ],
        actions: [
          {
            label: 'Edit',
            icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: (row) => this.showEditReceivedChemicalModal(row, container)
          },
          {
            label: 'Delete',
            icon: `<svg class="w-4 h-4 text-[#FF5630]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Delete Received Chemical Consignment',
                message: `Are you sure you want to delete consignment record for PO <strong class="text-[#00A4B7]">${row.poNo}</strong> (${row.chemical})?`,
                confirmText: 'Yes, Delete',
                cancelText: 'Cancel',
                isDestructive: true,
                onConfirm: () => {
                  const idx = this.state.receivedChemicals.findIndex(r => r.id === row.id);
                  if (idx !== -1) {
                    this.state.receivedChemicals.splice(idx, 1);
                    this.state.receivedChemicals.forEach((r, i) => { r.sNo = i + 1; });
                    renderTable(this.state.receivedChemicals);
                    Toast.show(`Received chemical record ${row.poNo} deleted`, 'info');
                  }
                }
              });
            }
          }
        ],
        onRowClick: (row) => {
          this.showReceivedChemicalDetailsModal(row);
        }
      });
    };

    // Filter Search Execution
    document.getElementById('rch-filter-search-btn')?.addEventListener('click', () => {
      const fPlant = document.getElementById('rch-filter-plant')?.value || 'ALL';
      const fStatus = document.getElementById('rch-filter-status')?.value || 'ALL';
      const fYear = document.getElementById('rch-filter-year')?.value || 'ALL';

      const filtered = this.state.receivedChemicals.filter(r => {
        if (fPlant !== 'ALL' && (r.processingPlant || r.plant) !== fPlant) return false;
        if (fStatus !== 'ALL' && r.status !== fStatus) return false;
        if (fYear !== 'ALL') {
          const recYear = r.year || (r.billOfEntryDate && r.billOfEntryDate !== '—' ? r.billOfEntryDate.substring(0, 4) : (r.clearedDate && r.clearedDate !== '—' ? r.clearedDate.substring(0, 4) : '2026'));
          if (recYear !== fYear) return false;
        }
        return true;
      });

      renderTable(filtered);
      Toast.show(`Applied filters: ${filtered.length} received chemical record(s) matched`, 'info');
    });

    renderTable(this.state.receivedChemicals);
  },

  // Modal: Receive Chemical Shipment
  showReceiveChemicalModal(container) {
    const nextRcvId = `RCV-CHM-2026-${Math.floor(100 + Math.random() * 890)}`;

    Modal.open({
      title: 'Receive Chemicals',
      size: 'lg',
      content: `
        <form id="form-receive-chem" class="space-y-3.5 text-xs" onsubmit="return false;">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <!-- 1. PROCESSING PLANT * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PROCESSING PLANT <span class="text-[#DE350B]">*</span></label>
              <select id="nrcv-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="" disabled>-- Select Processing Plant --</option>
                <option value="DFL UNIT-5 (JPT)" selected>DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
              </select>
            </div>

            <!-- 2. PONO * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PONO <span class="text-[#DE350B]">*</span></label>
              <select id="nrcv-po-no" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#0284C7]">
                <option value="" disabled>-- Select PO NO --</option>
                <option value="PO-CHM-2026-081" selected>PO-CHM-2026-081</option>
                <option value="PO-CHM-2026-082">PO-CHM-2026-082</option>
                <option value="PO-CHM-2026-083">PO-CHM-2026-083</option>
                <option value="PO-CHM-2026-084">PO-CHM-2026-084</option>
                <option value="PO-CHM-2026-085">PO-CHM-2026-085</option>
              </select>
            </div>

            <!-- 3. CHEMICAL * -->
            <div class="sm:col-span-2">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">CHEMICAL <span class="text-[#DE350B]">*</span></label>
              <select id="nrcv-chemical" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-bold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="" disabled>-- Select Chemical --</option>
                <option value="Sodium Tripolyphosphate (STPP)" selected>Sodium Tripolyphosphate (STPP)</option>
                <option value="Sodium Metabisulphite (SMS)">Sodium Metabisulphite (SMS)</option>
                <option value="Food-Grade Chlorine Powder">Food-Grade Chlorine Powder</option>
                <option value="Non-Phosphate Moisture Retainer">Non-Phosphate Moisture Retainer</option>
                <option value="Citric Acid Anhydrous">Citric Acid Anhydrous</option>
              </select>
            </div>

            <!-- 4. BL NO -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BL NO</label>
              <input type="text" id="nrcv-bl-no" placeholder="e.g. MSCU-BL-981244" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 5. CONTAINER NO -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">CONTAINER NO</label>
              <input type="text" id="nrcv-container-no" placeholder="e.g. MSCU-7489201" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono text-[#0284C7] focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 6. RECEIVED BAGS * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">RECEIVED BAGS <span class="text-[#DE350B]">*</span></label>
              <input type="number" id="nrcv-rcv-bags" value="200" placeholder="0" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 7. RECEIVED QTY IN KGS * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">RECEIVED QTY IN KGS <span class="text-[#DE350B]">*</span></label>
              <input type="number" id="nrcv-rcv-qty" value="5000" placeholder="0.00" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-bold text-[#00875A] focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 8. BILL OF ENTRY NO -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BILL OF ENTRY NO</label>
              <input type="text" id="nrcv-boe-no" placeholder="e.g. BOE-VPT-2026-8819" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 9. BILL OF ENTRY DATE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BILL OF ENTRY DATE</label>
              <div class="erp-date-wrapper">
                <input type="date" id="nrcv-boe-date" value="2026-10-04" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 10. CLEARED DATE -->
            <div class="sm:col-span-2">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">CLEARED DATE</label>
              <div class="erp-date-wrapper">
                <input type="date" id="nrcv-cleared-date" value="2026-10-06" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        {
          label: 'Receive Chemicals',
          type: 'primary',
          onClick: (m) => {
            const plant = document.getElementById('nrcv-plant')?.value?.trim();
            const poNo = document.getElementById('nrcv-po-no')?.value?.trim();
            const chemical = document.getElementById('nrcv-chemical')?.value?.trim();
            const blNo = document.getElementById('nrcv-bl-no')?.value?.trim() || '—';
            const containerNo = document.getElementById('nrcv-container-no')?.value?.trim() || '—';
            const receivedBagsRaw = document.getElementById('nrcv-rcv-bags')?.value;
            const receivedQtyRaw = document.getElementById('nrcv-rcv-qty')?.value;
            const billOfEntryNo = document.getElementById('nrcv-boe-no')?.value?.trim() || '—';
            const billOfEntryDate = document.getElementById('nrcv-boe-date')?.value || '—';
            const clearedDate = document.getElementById('nrcv-cleared-date')?.value || '—';

            if (!plant) {
              Toast.show('Please select Processing Plant', 'warning');
              return;
            }
            if (!poNo) {
              Toast.show('Please select PONO', 'warning');
              return;
            }
            if (!chemical) {
              Toast.show('Please select Chemical', 'warning');
              return;
            }
            if (receivedBagsRaw === '' || isNaN(Number(receivedBagsRaw))) {
              Toast.show('Please enter Received Bags', 'warning');
              return;
            }
            if (receivedQtyRaw === '' || isNaN(Number(receivedQtyRaw))) {
              Toast.show('Please enter Received Qty in KGS', 'warning');
              return;
            }

            const receivedBags = parseInt(receivedBagsRaw, 10);
            const receivedQuantity = parseFloat(receivedQtyRaw);

            Modal.confirm({
              title: 'Confirm Consignment Receipt',
              message: `Are you sure you want to receive chemicals for PO <strong class="text-[#00A4B7]">${poNo}</strong> (${chemical}: ${receivedQuantity.toLocaleString()} KG at ${plant})?`,
              confirmText: 'Yes, Receive Chemicals',
              cancelText: 'Cancel',
              isDestructive: false,
              onConfirm: () => {
                const newRec = {
                  sNo: 1,
                  id: nextRcvId,
                  processingPlant: plant,
                  poNo: poNo,
                  chemical: chemical,
                  blNo: blNo,
                  containerNo: containerNo,
                  receivedBags: receivedBags,
                  receivedQuantity: receivedQuantity,
                  billOfEntryNo: billOfEntryNo,
                  billOfEntryDate: billOfEntryDate,
                  clearedDate: clearedDate,
                  balanceBags: receivedBags,
                  balanceQuantity: receivedQuantity,
                  status: clearedDate && clearedDate !== '—' ? 'CLEARED' : 'RECEIVED'
                };

                this.state.receivedChemicals.forEach(r => { if (r.sNo) r.sNo += 1; });
                this.state.receivedChemicals.unshift(newRec);

                Toast.show(`Chemicals for PO ${poNo} received successfully`, 'success', 'Shipment Received');
                this.renderReceivedChemicalsScreen(container);
              }
            });
          }
        }
      ]
    });
  },

  // Modal: Edit Received Chemical Consignment
  showEditReceivedChemicalModal(row, container) {
    Modal.open({
      title: `Edit Received Consignment: ${row.poNo}`,
      size: 'lg',
      content: `
        <form id="form-edit-received-chem" class="space-y-3.5 text-xs" onsubmit="return false;">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <!-- 1. PROCESSING PLANT * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PROCESSING PLANT <span class="text-[#DE350B]">*</span></label>
              <select id="ercv-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="DFL UNIT-5 (JPT)" ${row.processingPlant === 'DFL UNIT-5 (JPT)' ? 'selected' : ''}>DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)" ${row.processingPlant === 'DFL UNIT-3 (PSP)' ? 'selected' : ''}>DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)" ${row.processingPlant === 'DFL UNIT-4 (PND)' ? 'selected' : ''}>DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)" ${row.processingPlant === 'DFL UNIT-1 (VSP)' ? 'selected' : ''}>DFL UNIT-1 (VSP)</option>
              </select>
            </div>

            <!-- 2. PONO * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PONO <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="ercv-po-no" value="${row.poNo || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 3. CHEMICAL * -->
            <div class="sm:col-span-2">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">CHEMICAL <span class="text-[#DE350B]">*</span></label>
              <select id="ercv-chemical" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-bold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="Sodium Tripolyphosphate (STPP)" ${row.chemical === 'Sodium Tripolyphosphate (STPP)' ? 'selected' : ''}>Sodium Tripolyphosphate (STPP)</option>
                <option value="Sodium Metabisulphite (SMS)" ${row.chemical === 'Sodium Metabisulphite (SMS)' ? 'selected' : ''}>Sodium Metabisulphite (SMS)</option>
                <option value="Food-Grade Chlorine Powder" ${row.chemical === 'Food-Grade Chlorine Powder' ? 'selected' : ''}>Food-Grade Chlorine Powder</option>
                <option value="Non-Phosphate Moisture Retainer" ${row.chemical === 'Non-Phosphate Moisture Retainer' ? 'selected' : ''}>Non-Phosphate Moisture Retainer</option>
                <option value="Citric Acid Anhydrous" ${row.chemical === 'Citric Acid Anhydrous' ? 'selected' : ''}>Citric Acid Anhydrous</option>
              </select>
            </div>

            <!-- 4. BL NO -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BL NO</label>
              <input type="text" id="ercv-bl-no" value="${row.blNo && row.blNo !== '—' ? row.blNo : ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 5. CONTAINER NO -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">CONTAINER NO</label>
              <input type="text" id="ercv-container-no" value="${row.containerNo && row.containerNo !== '—' ? row.containerNo : ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono text-[#0284C7] focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 6. RECEIVED BAGS * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">RECEIVED BAGS <span class="text-[#DE350B]">*</span></label>
              <input type="number" id="ercv-rcv-bags" value="${row.receivedBags || 0}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 7. RECEIVED QTY IN KGS * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">RECEIVED QTY IN KGS <span class="text-[#DE350B]">*</span></label>
              <input type="number" id="ercv-rcv-qty" value="${row.receivedQuantity || 0}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-bold text-[#00875A] focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 8. BILL OF ENTRY NO -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BILL OF ENTRY NO</label>
              <input type="text" id="ercv-boe-no" value="${row.billOfEntryNo && row.billOfEntryNo !== '—' ? row.billOfEntryNo : ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 9. BILL OF ENTRY DATE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BILL OF ENTRY DATE</label>
              <div class="erp-date-wrapper">
                <input type="date" id="ercv-boe-date" value="${row.billOfEntryDate && row.billOfEntryDate !== '—' ? row.billOfEntryDate : ''}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 10. CLEARED DATE -->
            <div class="sm:col-span-2">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">CLEARED DATE</label>
              <div class="erp-date-wrapper">
                <input type="date" id="ercv-cleared-date" value="${row.clearedDate && row.clearedDate !== '—' ? row.clearedDate : ''}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        {
          label: 'Save Changes',
          type: 'primary',
          onClick: (m) => {
            const plant = document.getElementById('ercv-plant')?.value?.trim() || row.processingPlant;
            const poNo = document.getElementById('ercv-po-no')?.value?.trim() || row.poNo;
            const chemical = document.getElementById('ercv-chemical')?.value?.trim() || row.chemical;
            const blNo = document.getElementById('ercv-bl-no')?.value?.trim() || row.blNo;
            const containerNo = document.getElementById('ercv-container-no')?.value?.trim() || row.containerNo;
            const receivedBags = parseInt(document.getElementById('ercv-rcv-bags')?.value, 10) || 0;
            const receivedQuantity = parseFloat(document.getElementById('ercv-rcv-qty')?.value) || 0;
            const billOfEntryNo = document.getElementById('ercv-boe-no')?.value?.trim() || row.billOfEntryNo;
            const billOfEntryDate = document.getElementById('ercv-boe-date')?.value || row.billOfEntryDate;
            const clearedDate = document.getElementById('ercv-cleared-date')?.value || row.clearedDate;

            Modal.confirm({
              title: 'Confirm Changes',
              message: `Are you sure you want to update consignment details for PO <strong class="text-[#00A4B7]">${poNo}</strong>?`,
              confirmText: 'Save Changes',
              cancelText: 'Cancel',
              isDestructive: false,
              onConfirm: () => {
                row.processingPlant = plant;
                row.poNo = poNo;
                row.chemical = chemical;
                row.blNo = blNo;
                row.containerNo = containerNo;
                row.receivedBags = receivedBags;
                row.receivedQuantity = receivedQuantity;
                row.billOfEntryNo = billOfEntryNo;
                row.billOfEntryDate = billOfEntryDate;
                row.clearedDate = clearedDate;
                if (clearedDate && clearedDate !== '—') {
                  row.status = 'CLEARED';
                }

                Toast.show(`Consignment record for ${poNo} updated successfully`, 'success');
                this.renderReceivedChemicalsScreen(container);
              }
            });
          }
        }
      ]
    });
  },

  // Modal: Show Received Chemical Details on Row Click
  showReceivedChemicalDetailsModal(row) {
    Modal.open({
      title: `Received Chemical Details: ${row.poNo}`,
      size: 'lg',
      content: `
        <div class="space-y-4 text-xs">
          <!-- Top summary badge card -->
          <div class="bg-[#F0F9FF] border border-[#BAE6FD] rounded-lg p-3.5 flex items-center justify-between">
            <div>
              <span class="text-[11px] font-bold text-[#0284C7] uppercase tracking-wider block">Chemical Consignment</span>
              <span class="text-base font-mono font-bold text-[#0C4A6E] mt-0.5 block">${row.poNo}</span>
            </div>
            <div class="text-right">
              <span class="lozenge ${row.status === 'CLEARED' ? 'lozenge-success' : 'lozenge-info'}">${row.status || 'RECEIVED'}</span>
              <span class="text-[11px] text-[#5E6C84] block mt-1">Cleared: ${row.clearedDate || '—'}</span>
            </div>
          </div>

          <!-- Key Details Grid (12 Fields) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-[#F4F5F7] p-3 rounded-lg border border-[#DFE1E6]">
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Processing Plant</span>
              <span class="font-bold text-[#172B4D] block mt-0.5">${row.processingPlant || 'DFL UNIT-5 (JPT)'}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Chemical</span>
              <span class="font-bold text-[#172B4D] block mt-0.5">${row.chemical}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">BL No</span>
              <span class="font-mono text-[#172B4D] block mt-0.5">${row.blNo || '—'}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Container No</span>
              <span class="font-mono text-[#0284C7] font-semibold block mt-0.5">${row.containerNo || '—'}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Received Bags</span>
              <span class="font-semibold text-[#172B4D] block mt-0.5">${row.receivedBags !== '-' && row.receivedBags != null && !isNaN(Number(row.receivedBags)) ? Number(row.receivedBags).toLocaleString() + ' Bags' : (row.receivedBags || '—')}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Received Qty (KG)</span>
              <span class="font-extrabold text-[#00875A] text-sm block mt-0.5">${row.receivedQuantity !== '-' && row.receivedQuantity != null && !isNaN(Number(row.receivedQuantity)) ? Number(row.receivedQuantity).toLocaleString() + ' KG' : (row.receivedQuantity || '—')}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Bill of Entry No</span>
              <span class="font-mono text-[#5E6C84] block mt-0.5">${row.billOfEntryNo || '—'}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Bill of Entry Date</span>
              <span class="text-[#172B4D] block mt-0.5">${row.billOfEntryDate || '—'}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Cleared Date</span>
              <span class="text-[#0284C7] font-semibold block mt-0.5">${row.clearedDate || '—'}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Balance Bags</span>
              <span class="font-semibold text-[#FF8B00] block mt-0.5">${row.balanceBags !== '-' && row.balanceBags != null && !isNaN(Number(row.balanceBags)) ? Number(row.balanceBags).toLocaleString() + ' Bags' : (row.balanceBags || '—')}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Balance Quantity</span>
              <span class="font-bold text-[#DE350B] text-sm block mt-0.5">${row.balanceQuantity !== '-' && row.balanceQuantity != null && !isNaN(Number(row.balanceQuantity)) ? Number(row.balanceQuantity).toLocaleString() + ' KG' : (row.balanceQuantity || '—')}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Consignment Status</span>
              <span class="lozenge ${row.status === 'CLEARED' ? 'lozenge-success' : 'lozenge-info'} inline-block mt-0.5">${row.status || 'RECEIVED'}</span>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: (m) => m.close() }
      ]
    });
  },
  // =========================================================================
  // 3. CHEMICALS CONSUMPTION SCREEN (CHEMICAL SCREENS TAB 3)
  // =========================================================================
  renderChemicalsConsumptionScreen(container) {
    container.innerHTML = `
      <div class="space-y-4">
        <!-- Top Action & Title Bar -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-0">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Chemicals Consumption</h1>
          </div>
          <div class="flex items-center gap-2">
            <button type="button" id="btn-log-chem-consumption" class="btn-primary border-0 rounded-full px-4 py-2 text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Log Consumption</span>
            </button>
          </div>
        </div>

        <!-- Filter / Search Card -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D] mb-0">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center" style="gap: 8px;">
              <button type="button" id="csm-top-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-7 h-7 inline-flex items-center justify-center bg-white border border-[#CBD5E1] rounded-none cursor-pointer" title="Reset all filters">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>
              <button type="button" id="csm-top-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-7 h-7 inline-flex items-center justify-center bg-white border border-[#CBD5E1] rounded-none cursor-pointer" title="Hide Filter">
                <svg id="csm-top-toggle-icon" class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <div id="csm-top-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <!-- 1. PLANT -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PLANT</label>
              <select id="csm-filter-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Plants</option>
                <option value="DFL UNIT-5 (JPT)">DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
              </select>
            </div>

            <!-- 2. CHEMICAL -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">CHEMICAL</label>
              <select id="csm-filter-chem" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Chemicals</option>
                <option value="Sodium Tripolyphosphate (STPP)">Sodium Tripolyphosphate (STPP)</option>
                <option value="Sodium Metabisulphite (SMS)">Sodium Metabisulphite (SMS)</option>
                <option value="Food-Grade Chlorine Powder">Food-Grade Chlorine Powder</option>
                <option value="Non-Phosphate Moisture Retainer">Non-Phosphate Moisture Retainer</option>
                <option value="Citric Acid Anhydrous">Citric Acid Anhydrous</option>
              </select>
            </div>

            <!-- 3. FROM DATE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">FROM DATE</label>
              <div class="erp-date-wrapper">
                <input type="date" id="csm-filter-from-date" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 4. TO DATE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TO DATE</label>
              <div class="erp-date-wrapper">
                <input type="date" id="csm-filter-to-date" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 5. Search Button (Second Row) -->
            <div class="sm:col-span-2 md:col-span-4 flex items-center justify-start pt-1">
              <button type="button" id="csm-filter-search-btn" class="dt-top-filter-search-btn btn-primary border-0 px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Table Container -->
        <div id="chem-consumption-table-container"></div>
      </div>
    `;

    // Bind Log Consumption Button
    document.getElementById('btn-log-chem-consumption')?.addEventListener('click', () => {
      this.showLogChemicalConsumptionModal(container);
    });

    // Toggle filter open/close handler
    const toggleBtn = document.getElementById('csm-top-toggle-btn');
    toggleBtn?.addEventListener('click', () => {
      const body = document.getElementById('csm-top-filter-body');
      const icon = document.getElementById('csm-top-toggle-icon');
      if (body) {
        body.classList.toggle('hidden');
        if (body.classList.contains('hidden')) {
          toggleBtn.title = 'Show Filter';
          icon?.classList.add('-rotate-90');
        } else {
          toggleBtn.title = 'Hide Filter';
          icon?.classList.remove('-rotate-90');
        }
      }
    });

    // Reset filter handler
    const resetBtn = document.getElementById('csm-top-reset-btn');
    resetBtn?.addEventListener('click', () => {
      if (document.getElementById('csm-filter-plant')) document.getElementById('csm-filter-plant').value = 'ALL';
      if (document.getElementById('csm-filter-chem')) document.getElementById('csm-filter-chem').value = 'ALL';
      if (document.getElementById('csm-filter-from-date')) document.getElementById('csm-filter-from-date').value = '';
      if (document.getElementById('csm-filter-to-date')) document.getElementById('csm-filter-to-date').value = '';

      renderTable(this.state.chemicalsConsumption);
      Toast.show('Filters reset', 'info');
    });

    const renderTable = (data) => {
      new DataTable({
        containerId: 'chem-consumption-table-container',
        data: data,
        keyField: 'id',
        tableTitle: 'Floor Chemical Issue & Consumption Records',
        searchable: true,
        exportable: true,
        pageSize: 10,
        actionsTitle: 'Actions',
        columns: [
          // 1. S.NO
          {
            field: 'sNo',
            header: 'S.NO',
            render: (v, r, i) => `<span class="text-[#5E6C84] font-semibold whitespace-nowrap">${v || (i + 1)}</span>`
          },
          // 2. Entry Date
          {
            field: 'entryDate',
            header: 'Entry Date',
            render: (v) => `<span class="text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 3. Chemical Name
          {
            field: 'chemicalName',
            header: 'Chemical Name',
            render: (v) => `<span class="font-bold text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 4. Plant Name
          {
            field: 'plantName',
            header: 'Plant Name',
            render: (v) => `<span class="text-[#5E6C84] whitespace-nowrap">${v}</span>`
          },
          // 5. Transfer Name
          {
            field: 'transferName',
            header: 'Transfer Name',
            render: (v) => `<span class="px-2 py-0.5 rounded text-xs font-semibold bg-[#F0F9FF] text-[#00A4B7] border border-[#BAE6FD] whitespace-nowrap">${v}</span>`
          },
          // 6. Consumed Bags
          {
            field: 'consumedBags',
            header: 'Consumed Bags',
            render: (v) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${v !== '-' && v !== '' && v != null && !isNaN(Number(v)) ? Number(v).toLocaleString() + ' Bags' : (v || '—')}</span>`
          },
          // 7. Consumed Quantity
          {
            field: 'consumedQuantity',
            header: 'Consumed Quantity',
            render: (v) => `<span class="font-extrabold text-[#00875A] whitespace-nowrap">${v !== '-' && v !== '' && v != null && !isNaN(Number(v)) ? Number(v).toLocaleString() + ' KG' : (v || '—')}</span>`
          }
          // 8. Actions (centered)
        ],
        actions: [
          {
            label: 'Edit',
            icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: (row) => this.showEditChemicalConsumptionModal(row, container)
          },
          {
            label: 'Delete',
            icon: `<svg class="w-4 h-4 text-[#FF5630]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Delete Chemical Consumption',
                message: `Are you sure you want to delete consumption record of <strong class="text-[#00A4B7]">${row.chemicalName}</strong> (${row.consumedQuantity} KG)?`,
                confirmText: 'Yes, Delete',
                cancelText: 'Cancel',
                isDestructive: true,
                onConfirm: () => {
                  const idx = this.state.chemicalsConsumption.findIndex(r => r.id === row.id);
                  if (idx !== -1) {
                    this.state.chemicalsConsumption.splice(idx, 1);
                    this.state.chemicalsConsumption.forEach((r, i) => { r.sNo = i + 1; });
                    renderTable(this.state.chemicalsConsumption);
                    Toast.show(`Consumption record deleted`, 'info');
                  }
                }
              });
            }
          }
        ],
        onRowClick: (row) => {
          this.showChemicalConsumptionDetailsModal(row);
        }
      });
    };

    // Filter Search Execution
    document.getElementById('csm-filter-search-btn')?.addEventListener('click', () => {
      const fPlant = document.getElementById('csm-filter-plant')?.value || 'ALL';
      const fChem = document.getElementById('csm-filter-chem')?.value || 'ALL';
      const fFromDate = document.getElementById('csm-filter-from-date')?.value || '';
      const fToDate = document.getElementById('csm-filter-to-date')?.value || '';

      const filtered = this.state.chemicalsConsumption.filter(r => {
        if (fPlant !== 'ALL' && (r.plantName || r.productionPlant) !== fPlant) return false;
        if (fChem !== 'ALL' && r.chemicalName !== fChem) return false;
        const cDate = r.entryDate || r.consumptionDate || '';
        if (fFromDate && cDate && cDate < fFromDate) return false;
        if (fToDate && cDate && cDate > fToDate) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Applied filters: ${filtered.length} consumption record(s) matched`, 'info');
    });

    renderTable(this.state.chemicalsConsumption);
  },

  // Modal: Log Chemical Consumption
  showLogChemicalConsumptionModal(container) {
    const nextCsmId = `CSM-2026-${Math.floor(100 + Math.random() * 890)}`;

    Modal.open({
      title: 'Log Chemical Consumption',
      size: 'md',
      content: `
        <form id="form-log-chem-csm" class="space-y-3.5 text-xs" onsubmit="return false;">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <!-- 1. PLANT NAME * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PLANT NAME <span class="text-[#DE350B]">*</span></label>
              <select id="ncsm-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="" disabled>-- Select Plant --</option>
                <option value="DFL UNIT-5 (JPT)" selected>DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
              </select>
            </div>

            <!-- 2. USAGE TYPE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">USAGE TYPE <span class="text-[#DE350B]">*</span></label>
              <select id="ncsm-usage-type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="Moisture Retention Soaking" selected>Moisture Retention Soaking</option>
                <option value="Freshness Dip Treatment">Freshness Dip Treatment</option>
                <option value="Sanitation & Disinfection">Sanitation & Disinfection</option>
                <option value="Value Addition Batch">Value Addition Batch</option>
                <option value="pH Adjustment & Glaze">pH Adjustment & Glaze</option>
                <option value="Floor Sanitation Rinse">Floor Sanitation Rinse</option>
              </select>
            </div>

            <!-- 3. CHEMICAL NAME * -->
            <div class="sm:col-span-2">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">CHEMICAL NAME <span class="text-[#DE350B]">*</span></label>
              <select id="ncsm-chemical" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-bold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="" disabled>-- Select Chemical --</option>
                <option value="Sodium Tripolyphosphate (STPP)" selected>Sodium Tripolyphosphate (STPP)</option>
                <option value="Sodium Metabisulphite (SMS)">Sodium Metabisulphite (SMS)</option>
                <option value="Food-Grade Chlorine Powder">Food-Grade Chlorine Powder</option>
                <option value="Non-Phosphate Moisture Retainer">Non-Phosphate Moisture Retainer</option>
                <option value="Citric Acid Anhydrous">Citric Acid Anhydrous</option>
              </select>
            </div>

            <!-- 4. BAGS QUANTITY * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BAGS QUANTITY <span class="text-[#DE350B]">*</span></label>
              <input type="number" id="ncsm-bags" value="2" placeholder="0" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 5. QUANTITY IN KGS * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">QUANTITY IN KGS <span class="text-[#DE350B]">*</span></label>
              <input type="number" id="ncsm-qty" value="50" placeholder="0.00" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-bold text-[#00875A] focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 6. DATE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" id="ncsm-date" value="2026-10-07" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded text-[#172B4D] focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 7. SEND TO * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SEND TO <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="ncsm-send-to" value="Soaking Tank Bay #2" placeholder="Destination / Line / Station" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#00A4B7] focus:outline-none focus:border-[#0284C7]" />
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        {
          label: 'Save Consumption',
          type: 'primary',
          onClick: (m) => {
            const plantName = document.getElementById('ncsm-plant')?.value?.trim();
            const usageType = document.getElementById('ncsm-usage-type')?.value?.trim();
            const chemicalName = document.getElementById('ncsm-chemical')?.value?.trim();
            const bagsRaw = document.getElementById('ncsm-bags')?.value;
            const qtyRaw = document.getElementById('ncsm-qty')?.value;
            const date = document.getElementById('ncsm-date')?.value?.trim();
            const sendTo = document.getElementById('ncsm-send-to')?.value?.trim();

            if (!plantName) {
              Toast.show('Please select Plant Name', 'warning');
              return;
            }
            if (!usageType) {
              Toast.show('Please select Usage Type', 'warning');
              return;
            }
            if (!chemicalName) {
              Toast.show('Please select Chemical Name', 'warning');
              return;
            }
            if (bagsRaw === '' || isNaN(Number(bagsRaw))) {
              Toast.show('Please enter Bags Quantity', 'warning');
              return;
            }
            if (qtyRaw === '' || isNaN(Number(qtyRaw))) {
              Toast.show('Please enter Quantity in KGS', 'warning');
              return;
            }
            if (!date) {
              Toast.show('Please select Date', 'warning');
              return;
            }
            if (!sendTo) {
              Toast.show('Please enter Send To destination', 'warning');
              return;
            }

            const consumedBags = parseInt(bagsRaw, 10);
            const consumedQuantity = parseFloat(qtyRaw);

            Modal.confirm({
              title: 'Confirm Chemical Consumption',
              message: `Are you sure you want to log consumption of <strong class="text-[#00A4B7]">${chemicalName}</strong> (${consumedQuantity} KG) to <strong>${sendTo}</strong> at ${plantName}?`,
              confirmText: 'Yes, Save',
              cancelText: 'Cancel',
              isDestructive: false,
              onConfirm: () => {
                const newRec = {
                  sNo: 1,
                  id: nextCsmId,
                  entryDate: date,
                  chemicalName: chemicalName,
                  plantName: plantName,
                  usageType: usageType,
                  transferName: sendTo,
                  consumedBags: consumedBags,
                  consumedQuantity: consumedQuantity,
                  status: 'CONSUMED'
                };

                this.state.chemicalsConsumption.forEach(r => { if (r.sNo) r.sNo += 1; });
                this.state.chemicalsConsumption.unshift(newRec);

                Toast.show(`Consumption of ${chemicalName} logged successfully`, 'success', 'Consumption Logged');
                this.renderChemicalsConsumptionScreen(container);
              }
            });
          }
        }
      ]
    });
  },

  // Modal: Edit Chemical Consumption
  showEditChemicalConsumptionModal(row, container) {
    Modal.open({
      title: `Edit Chemical Consumption: ${row.chemicalName}`,
      size: 'md',
      content: `
        <form id="form-edit-chem-csm" class="space-y-3.5 text-xs" onsubmit="return false;">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <!-- 1. PLANT NAME * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PLANT NAME <span class="text-[#DE350B]">*</span></label>
              <select id="ecsm-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="DFL UNIT-5 (JPT)" ${row.plantName === 'DFL UNIT-5 (JPT)' ? 'selected' : ''}>DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)" ${row.plantName === 'DFL UNIT-3 (PSP)' ? 'selected' : ''}>DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)" ${row.plantName === 'DFL UNIT-4 (PND)' ? 'selected' : ''}>DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)" ${row.plantName === 'DFL UNIT-1 (VSP)' ? 'selected' : ''}>DFL UNIT-1 (VSP)</option>
              </select>
            </div>

            <!-- 2. USAGE TYPE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">USAGE TYPE <span class="text-[#DE350B]">*</span></label>
              <select id="ecsm-usage-type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="Moisture Retention Soaking" ${row.usageType === 'Moisture Retention Soaking' ? 'selected' : ''}>Moisture Retention Soaking</option>
                <option value="Freshness Dip Treatment" ${row.usageType === 'Freshness Dip Treatment' ? 'selected' : ''}>Freshness Dip Treatment</option>
                <option value="Sanitation & Disinfection" ${row.usageType === 'Sanitation & Disinfection' ? 'selected' : ''}>Sanitation & Disinfection</option>
                <option value="Value Addition Batch" ${row.usageType === 'Value Addition Batch' ? 'selected' : ''}>Value Addition Batch</option>
                <option value="pH Adjustment & Glaze" ${row.usageType === 'pH Adjustment & Glaze' ? 'selected' : ''}>pH Adjustment & Glaze</option>
                <option value="Floor Sanitation Rinse" ${row.usageType === 'Floor Sanitation Rinse' ? 'selected' : ''}>Floor Sanitation Rinse</option>
              </select>
            </div>

            <!-- 3. CHEMICAL NAME * -->
            <div class="sm:col-span-2">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">CHEMICAL NAME <span class="text-[#DE350B]">*</span></label>
              <select id="ecsm-chemical" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-bold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="Sodium Tripolyphosphate (STPP)" ${row.chemicalName === 'Sodium Tripolyphosphate (STPP)' ? 'selected' : ''}>Sodium Tripolyphosphate (STPP)</option>
                <option value="Sodium Metabisulphite (SMS)" ${row.chemicalName === 'Sodium Metabisulphite (SMS)' ? 'selected' : ''}>Sodium Metabisulphite (SMS)</option>
                <option value="Food-Grade Chlorine Powder" ${row.chemicalName === 'Food-Grade Chlorine Powder' ? 'selected' : ''}>Food-Grade Chlorine Powder</option>
                <option value="Non-Phosphate Moisture Retainer" ${row.chemicalName === 'Non-Phosphate Moisture Retainer' ? 'selected' : ''}>Non-Phosphate Moisture Retainer</option>
                <option value="Citric Acid Anhydrous" ${row.chemicalName === 'Citric Acid Anhydrous' ? 'selected' : ''}>Citric Acid Anhydrous</option>
              </select>
            </div>

            <!-- 4. BAGS QUANTITY * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BAGS QUANTITY <span class="text-[#DE350B]">*</span></label>
              <input type="number" id="ecsm-bags" value="${row.consumedBags || 0}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 5. QUANTITY IN KGS * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">QUANTITY IN KGS <span class="text-[#DE350B]">*</span></label>
              <input type="number" id="ecsm-qty" value="${row.consumedQuantity || 0}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-bold text-[#00875A] focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 6. DATE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" id="ecsm-date" value="${row.entryDate || ''}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded text-[#172B4D] focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 7. SEND TO * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SEND TO <span class="text-[#DE350B]">*</span></label>
              <input type="text" id="ecsm-send-to" value="${row.transferName || ''}" placeholder="Destination / Line / Station" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#00A4B7] focus:outline-none focus:border-[#0284C7]" />
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        {
          label: 'Save Changes',
          type: 'primary',
          onClick: (m) => {
            const plantName = document.getElementById('ecsm-plant')?.value?.trim() || row.plantName;
            const usageType = document.getElementById('ecsm-usage-type')?.value?.trim() || row.usageType;
            const chemicalName = document.getElementById('ecsm-chemical')?.value?.trim() || row.chemicalName;
            const consumedBags = parseInt(document.getElementById('ecsm-bags')?.value, 10) || 0;
            const consumedQuantity = parseFloat(document.getElementById('ecsm-qty')?.value) || 0;
            const date = document.getElementById('ecsm-date')?.value?.trim() || row.entryDate;
            const sendTo = document.getElementById('ecsm-send-to')?.value?.trim() || row.transferName;

            Modal.confirm({
              title: 'Confirm Changes',
              message: `Are you sure you want to update chemical consumption for <strong class="text-[#00A4B7]">${chemicalName}</strong>?`,
              confirmText: 'Save Changes',
              cancelText: 'Cancel',
              isDestructive: false,
              onConfirm: () => {
                row.plantName = plantName;
                row.usageType = usageType;
                row.chemicalName = chemicalName;
                row.consumedBags = consumedBags;
                row.consumedQuantity = consumedQuantity;
                row.entryDate = date;
                row.transferName = sendTo;

                Toast.show(`Consumption of ${chemicalName} updated successfully`, 'success');
                this.renderChemicalsConsumptionScreen(container);
              }
            });
          }
        }
      ]
    });
  },

  // Modal: Show Chemical Consumption Details on Row Click
  showChemicalConsumptionDetailsModal(row) {
    Modal.open({
      title: `Chemical Consumption Details: ${row.chemicalName}`,
      size: 'md',
      content: `
        <div class="space-y-4 text-xs">
          <!-- Top summary badge card -->
          <div class="bg-[#F0F9FF] border border-[#BAE6FD] rounded-lg p-3.5 flex items-center justify-between">
            <div>
              <span class="text-[11px] font-bold text-[#0284C7] uppercase tracking-wider block">Chemical Consumption</span>
              <span class="text-base font-bold text-[#0C4A6E] mt-0.5 block">${row.chemicalName}</span>
            </div>
            <div class="text-right">
              <span class="lozenge lozenge-success">CONSUMED</span>
              <span class="text-[11px] text-[#5E6C84] block mt-1">Date: ${row.entryDate}</span>
            </div>
          </div>

          <!-- Key Details Grid (6 Fields) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#F4F5F7] p-3 rounded-lg border border-[#DFE1E6]">
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Plant Name</span>
              <span class="font-bold text-[#172B4D] block mt-0.5">${row.plantName}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Usage Type</span>
              <span class="font-semibold text-[#172B4D] block mt-0.5">${row.usageType || '—'}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Send To / Destination</span>
              <span class="text-[#00A4B7] font-semibold block mt-0.5">${row.transferName}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Consumed Bags</span>
              <span class="font-bold text-[#172B4D] block mt-0.5">${Number(row.consumedBags).toLocaleString()} Bags</span>
            </div>
            <div class="sm:col-span-2">
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Consumed Quantity</span>
              <span class="font-extrabold text-[#00875A] text-base block mt-0.5">${Number(row.consumedQuantity).toLocaleString()} KG</span>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: (m) => m.close() }
      ]
    });
  },
  // =========================================================================
  // 4. CHEMICAL RECEIVED REPORT SCREEN (CHEMICAL SCREENS TAB 4)
  // =========================================================================
  renderChemicalReceivedReportScreen(container) {
    container.innerHTML = `
      <div class="space-y-4">
        <!-- Top Action & Title Bar -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-0">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Chemical Received Report</h1>
          </div>
        </div>

        <!-- Filter / Search Card -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D] mb-0">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center" style="gap: 8px;">
              <button type="button" id="crr-top-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-7 h-7 inline-flex items-center justify-center bg-white border border-[#CBD5E1] rounded-none cursor-pointer" title="Reset all filters">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>
              <button type="button" id="crr-top-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-7 h-7 inline-flex items-center justify-center bg-white border border-[#CBD5E1] rounded-none cursor-pointer" title="Hide Filter">
                <svg id="crr-top-toggle-icon" class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <div id="crr-top-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <!-- 1. PLANT -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PLANT</label>
              <select id="crr-filter-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Plants</option>
                <option value="DFL UNIT-5 (JPT)">DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
              </select>
            </div>

            <!-- 2. YEAR -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">YEAR</label>
              <select id="crr-filter-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Years</option>
                <option value="2026" selected>2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
              </select>
            </div>

            <!-- 3. Search Button Slot (Compact, Natural Width) -->
            <div class="flex items-end">
              <button type="button" id="crr-filter-search-btn" class="dt-top-filter-search-btn btn-primary border-0 px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Table Container -->
        <div id="chem-received-report-table-container"></div>
      </div>
    `;



    // Toggle filter open/close handler
    const toggleBtn = document.getElementById('crr-top-toggle-btn');
    toggleBtn?.addEventListener('click', () => {
      const body = document.getElementById('crr-top-filter-body');
      const icon = document.getElementById('crr-top-toggle-icon');
      if (body) {
        body.classList.toggle('hidden');
        if (body.classList.contains('hidden')) {
          toggleBtn.title = 'Show Filter';
          icon?.classList.add('-rotate-90');
        } else {
          toggleBtn.title = 'Hide Filter';
          icon?.classList.remove('-rotate-90');
        }
      }
    });

    // Reset filter handler
    const resetBtn = document.getElementById('crr-top-reset-btn');
    resetBtn?.addEventListener('click', () => {
      if (document.getElementById('crr-filter-plant')) document.getElementById('crr-filter-plant').value = 'ALL';
      if (document.getElementById('crr-filter-year')) document.getElementById('crr-filter-year').value = 'ALL';

      renderTable(this.state.receivedChemicals);
      Toast.show('Filters reset', 'info');
    });

    const renderTable = (data) => {
      new DataTable({
        containerId: 'chem-received-report-table-container',
        data: data,
        keyField: 'id',
        tableTitle: 'Chemical Received Consignment Register',
        searchable: true,
        exportable: true,
        pageSize: 10,
        columns: [
          // 1. S.NO
          {
            field: 'sNo',
            header: 'S.NO',
            render: (v, r, i) => `<span class="text-[#5E6C84] font-semibold">${v || (i + 1)}</span>`
          },
          // 2. PoNo
          {
            field: 'poNo',
            header: 'PoNo',
            render: (v) => `<span class="font-mono font-bold text-[#00A4B7] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BAE6FD] whitespace-nowrap">${v}</span>`
          },
          // 3. Chemical
          {
            field: 'chemical',
            header: 'Chemical',
            render: (v, row) => `<span class="font-bold text-[#172B4D] whitespace-nowrap">${v || row.chemicalName || '—'}</span>`
          },
          // 4. Received Bags
          {
            field: 'receivedBags',
            header: 'Received Bags',
            render: (v) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${v !== '-' && v !== '' && v != null && !isNaN(Number(v)) ? Number(v).toLocaleString() + ' Bags' : (v || '—')}</span>`
          },
          // 5. Received Quantity
          {
            field: 'receivedQuantity',
            header: 'Received Quantity',
            render: (v) => `<span class="font-extrabold text-[#00875A] whitespace-nowrap">${v !== '-' && v !== '' && v != null && !isNaN(Number(v)) ? Number(v).toLocaleString() + ' KG' : (v || '—')}</span>`
          },
          // 6. Balance Bags
          {
            field: 'balanceBags',
            header: 'Balance Bags',
            render: (v) => `<span class="font-semibold text-[#FF8B00] whitespace-nowrap">${v !== '-' && v !== '' && v != null && !isNaN(Number(v)) ? Number(v).toLocaleString() + ' Bags' : (v || '—')}</span>`
          },
          // 7. Balance Quantity
          {
            field: 'balanceQuantity',
            header: 'Balance Quantity',
            render: (v) => `<span class="font-bold text-[#DE350B] whitespace-nowrap">${v !== '-' && v !== '' && v != null && !isNaN(Number(v)) ? Number(v).toLocaleString() + ' KG' : (v || '—')}</span>`
          },
          // 8. Status
          {
            field: 'status',
            header: 'Status',
            render: (v) => {
              const lozClass = v === 'CLEARED' ? 'lozenge-success' : (v === 'RECEIVED' ? 'lozenge-info' : 'lozenge-warning');
              return `<span class="lozenge ${lozClass}">${v || 'RECEIVED'}</span>`;
            }
          }
        ],
        actions: [],
        onRowClick: (row) => {
          Toast.show(`PO: ${row.poNo} • ${row.chemical} (Received: ${row.receivedQuantity} KG)`, 'info');
        }
      });
    };

    // Filter Search Execution
    document.getElementById('crr-filter-search-btn')?.addEventListener('click', () => {
      const fPlant = document.getElementById('crr-filter-plant')?.value || 'ALL';
      const fYear = document.getElementById('crr-filter-year')?.value || 'ALL';

      const filtered = this.state.receivedChemicals.filter(r => {
        if (fPlant !== 'ALL' && (r.processingPlant || r.plant || r.productionPlant) !== fPlant) return false;
        if (fYear !== 'ALL') {
          const recYear = r.year || (r.billOfEntryDate && r.billOfEntryDate !== '—' ? r.billOfEntryDate.substring(0, 4) : (r.clearedDate && r.clearedDate !== '—' ? r.clearedDate.substring(0, 4) : '2026'));
          if (recYear !== fYear) return false;
        }
        return true;
      });

      renderTable(filtered);
      Toast.show(`Applied filters: ${filtered.length} report record(s) matched`, 'info');
    });

    renderTable(this.state.receivedChemicals);
  },
  // =========================================================================
  // 5. CHEMICAL OPENING BALANCE REPORT SCREEN (CHEMICAL SCREENS TAB 5)
  // =========================================================================
  renderChemicalOpeningBalanceReportScreen(container) {
    container.innerHTML = `
      <div class="space-y-4">
        <!-- Top Action & Title Bar -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-0">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Chemical Opening Balance Report</h1>
          </div>
        </div>

        <!-- Filter / Search Card -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D] mb-0">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center" style="gap: 8px;">
              <button type="button" id="cob-top-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-7 h-7 inline-flex items-center justify-center bg-white border border-[#CBD5E1] rounded-none cursor-pointer" title="Reset all filters">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>
              <button type="button" id="cob-top-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-7 h-7 inline-flex items-center justify-center bg-white border border-[#CBD5E1] rounded-none cursor-pointer" title="Hide Filter">
                <svg id="cob-top-toggle-icon" class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <div id="cob-top-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <!-- 1. PLANT -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PLANT</label>
              <select id="cob-filter-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Plants</option>
                <option value="DFL UNIT-5 (JPT)">DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
              </select>
            </div>

            <!-- 2. CHEMICAL -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">CHEMICAL</label>
              <select id="cob-filter-chem" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Chemicals</option>
                <option value="Sodium Tripolyphosphate (STPP)">Sodium Tripolyphosphate (STPP)</option>
                <option value="Sodium Metabisulphite (SMS)">Sodium Metabisulphite (SMS)</option>
                <option value="Food-Grade Chlorine Powder">Food-Grade Chlorine Powder</option>
                <option value="Non-Phosphate Moisture Retainer">Non-Phosphate Moisture Retainer</option>
                <option value="Citric Acid Anhydrous">Citric Acid Anhydrous</option>
              </select>
            </div>

            <!-- 3. BILL DATE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BILL DATE</label>
              <div class="erp-date-wrapper">
                <input type="date" id="cob-filter-bill-date" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 4. Search Button Slot (Compact, Natural Width) -->
            <div class="flex items-end">
              <button type="button" id="cob-filter-search-btn" class="dt-top-filter-search-btn btn-primary border-0 px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Table Container -->
        <div id="chem-opening-bal-table-container"></div>
      </div>
    `;



    // Toggle filter open/close handler
    const toggleBtn = document.getElementById('cob-top-toggle-btn');
    toggleBtn?.addEventListener('click', () => {
      const body = document.getElementById('cob-top-filter-body');
      const icon = document.getElementById('cob-top-toggle-icon');
      if (body) {
        body.classList.toggle('hidden');
        if (body.classList.contains('hidden')) {
          toggleBtn.title = 'Show Filter';
          icon?.classList.add('-rotate-90');
        } else {
          toggleBtn.title = 'Hide Filter';
          icon?.classList.remove('-rotate-90');
        }
      }
    });

    // Reset filter handler
    const resetBtn = document.getElementById('cob-top-reset-btn');
    resetBtn?.addEventListener('click', () => {
      if (document.getElementById('cob-filter-plant')) document.getElementById('cob-filter-plant').value = 'ALL';
      if (document.getElementById('cob-filter-chem')) document.getElementById('cob-filter-chem').value = 'ALL';
      if (document.getElementById('cob-filter-bill-date')) document.getElementById('cob-filter-bill-date').value = '';

      renderTable(this.state.chemicalOpeningBalance);
      Toast.show('Filters reset', 'info');
    });

    const renderTable = (data) => {
      new DataTable({
        containerId: 'chem-opening-bal-table-container',
        data: data,
        keyField: 'id',
        tableTitle: 'Financial Year Chemical Opening Balance Log',
        searchable: true,
        exportable: true,
        pageSize: 10,
        columns: [
          // 1. S.NO
          {
            field: 'sNo',
            header: 'S.NO',
            render: (v, r, i) => `<span class="text-[#5E6C84] font-semibold">${v || (i + 1)}</span>`
          },
          // 2. Chemical
          {
            field: 'chemical',
            header: 'Chemical',
            render: (v, r) => `<span class="font-bold text-[#172B4D] whitespace-nowrap">${v || r.chemicalName || '—'}</span>`
          },
          // 3. KGs per Bag
          {
            field: 'kgsPerBag',
            header: 'KGs per Bag',
            render: (v) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${v ? Number(v).toLocaleString() + ' KG/Bag' : '—'}</span>`
          },
          // 4. Total Bags
          {
            field: 'totalBags',
            header: 'Total Bags',
            render: (v) => `<span class="font-bold text-[#0284C7] whitespace-nowrap">${v ? Number(v).toLocaleString() + ' Bags' : '—'}</span>`
          },
          // 5. Total KGs
          {
            field: 'totalKgs',
            header: 'Total KGs',
            render: (v) => `<span class="font-extrabold text-[#00875A] whitespace-nowrap">${v ? Number(v).toLocaleString() + ' KG' : '—'}</span>`
          }
        ],
        actions: [],
        onRowClick: (row) => {
          Toast.show(`Opening Balance: ${row.chemical} (${row.totalKgs} KG / ${row.totalBags} Bags)`, 'info');
        }
      });
    };

    // Filter Search Execution
    document.getElementById('cob-filter-search-btn')?.addEventListener('click', () => {
      const fPlant = document.getElementById('cob-filter-plant')?.value || 'ALL';
      const fChem = document.getElementById('cob-filter-chem')?.value || 'ALL';
      const fDate = document.getElementById('cob-filter-bill-date')?.value || '';

      const filtered = this.state.chemicalOpeningBalance.filter(r => {
        if (fPlant !== 'ALL' && (r.plant || r.productionPlant) !== fPlant) return false;
        if (fChem !== 'ALL' && (r.chemical || r.chemicalName) !== fChem) return false;
        if (fDate && (r.billDate || r.asOnDate) !== fDate) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Applied filters: ${filtered.length} opening balance record(s) matched`, 'info');
    });

    renderTable(this.state.chemicalOpeningBalance);
  },

  // Modal: Add Chemical Opening Balance
  showAddChemicalOpeningBalanceModal(container) {
    const nextCobId = `COB-2026-${Math.floor(10 + Math.random() * 89)}`;

    Modal.open({
      title: 'Add Chemical Opening Balance',
      size: 'md',
      content: `
        <form id="form-add-chem-cob" class="space-y-3.5 text-xs" onsubmit="return false;">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <!-- 1. PLANT * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PLANT <span class="text-[#DE350B]">*</span></label>
              <select id="ncob-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="" disabled>-- Select Plant --</option>
                <option value="DFL UNIT-5 (JPT)" selected>DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
              </select>
            </div>

            <!-- 2. BILL DATE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">BILL DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" id="ncob-bill-date" value="2026-04-01" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded text-[#172B4D] focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 3. CHEMICAL * -->
            <div class="sm:col-span-2">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">CHEMICAL <span class="text-[#DE350B]">*</span></label>
              <select id="ncob-chemical" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-bold text-[#172B4D] focus:outline-none focus:border-[#0284C7]">
                <option value="" disabled>-- Select Chemical --</option>
                <option value="Sodium Tripolyphosphate (STPP)" selected>Sodium Tripolyphosphate (STPP)</option>
                <option value="Sodium Metabisulphite (SMS)">Sodium Metabisulphite (SMS)</option>
                <option value="Food-Grade Chlorine Powder">Food-Grade Chlorine Powder</option>
                <option value="Non-Phosphate Moisture Retainer">Non-Phosphate Moisture Retainer</option>
                <option value="Citric Acid Anhydrous">Citric Acid Anhydrous</option>
              </select>
            </div>

            <!-- 4. KGS PER BAG * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">KGS PER BAG <span class="text-[#DE350B]">*</span></label>
              <input type="number" id="ncob-kgs-per-bag" value="25" placeholder="25" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 5. TOTAL BAGS * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TOTAL BAGS <span class="text-[#DE350B]">*</span></label>
              <input type="number" id="ncob-total-bags" value="50" placeholder="0" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-bold text-[#0284C7] focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 6. TOTAL KGS * -->
            <div class="sm:col-span-2">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TOTAL KGS <span class="text-[#DE350B]">*</span></label>
              <input type="number" id="ncob-total-kgs" value="1250" placeholder="0.00" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-extrabold text-[#00875A] focus:outline-none focus:border-[#0284C7]" />
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (m) => m.close() },
        {
          label: 'Save Opening Balance',
          type: 'primary',
          onClick: (m) => {
            const plant = document.getElementById('ncob-plant')?.value?.trim();
            const chemical = document.getElementById('ncob-chemical')?.value?.trim();
            const billDate = document.getElementById('ncob-bill-date')?.value?.trim();
            const kgsPerBagRaw = document.getElementById('ncob-kgs-per-bag')?.value;
            const totalBagsRaw = document.getElementById('ncob-total-bags')?.value;
            const totalKgsRaw = document.getElementById('ncob-total-kgs')?.value;

            if (!plant) {
              Toast.show('Please select Plant', 'warning');
              return;
            }
            if (!chemical) {
              Toast.show('Please select Chemical', 'warning');
              return;
            }
            if (!billDate) {
              Toast.show('Please select Bill Date', 'warning');
              return;
            }
            if (kgsPerBagRaw === '' || isNaN(Number(kgsPerBagRaw))) {
              Toast.show('Please enter KGs per Bag', 'warning');
              return;
            }
            if (totalBagsRaw === '' || isNaN(Number(totalBagsRaw))) {
              Toast.show('Please enter Total Bags', 'warning');
              return;
            }

            const kgsPerBag = parseFloat(kgsPerBagRaw);
            const totalBags = parseInt(totalBagsRaw, 10);
            const totalKgs = parseFloat(totalKgsRaw) || (kgsPerBag * totalBags);

            Modal.confirm({
              title: 'Confirm Opening Balance',
              message: `Are you sure you want to add opening balance for <strong class="text-[#00A4B7]">${chemical}</strong> (${totalKgs} KG / ${totalBags} Bags) at ${plant}?`,
              confirmText: 'Yes, Save',
              cancelText: 'Cancel',
              isDestructive: false,
              onConfirm: () => {
                const newRec = {
                  sNo: 1,
                  id: nextCobId,
                  chemical: chemical,
                  plant: plant,
                  billDate: billDate,
                  kgsPerBag: kgsPerBag,
                  totalBags: totalBags,
                  totalKgs: totalKgs
                };

                this.state.chemicalOpeningBalance.forEach(r => { if (r.sNo) r.sNo += 1; });
                this.state.chemicalOpeningBalance.unshift(newRec);

                Toast.show(`Opening balance for ${chemical} added successfully`, 'success', 'Balance Added');
                this.renderChemicalOpeningBalanceReportScreen(container);
              }
            });
          }
        }
      ]
    });

    // Auto-calculate Total KGs when KGs per Bag or Total Bags changes
    const kgsInput = document.getElementById('ncob-kgs-per-bag');
    const bagsInput = document.getElementById('ncob-total-bags');
    const totalInput = document.getElementById('ncob-total-kgs');

    const autoCalc = () => {
      const k = parseFloat(kgsInput?.value) || 0;
      const b = parseFloat(bagsInput?.value) || 0;
      if (totalInput) totalInput.value = (k * b) || '';
    };

    kgsInput?.addEventListener('input', autoCalc);
    bagsInput?.addEventListener('input', autoCalc);
  },
  // =========================================================================
  // 6. CHEMICAL BALANCE REPORT SCREEN (CHEMICAL SCREENS TAB 6)
  // =========================================================================
  renderChemicalBalanceReportScreen(container) {
    container.innerHTML = `
      <div class="space-y-4">
        <!-- Top Action & Title Bar -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-0">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Chemical Balance Report</h1>
          </div>
        </div>

        <!-- Filter / Search Card -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D] mb-0">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center" style="gap: 8px;">
              <button type="button" id="cbl-top-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-7 h-7 inline-flex items-center justify-center bg-white border border-[#CBD5E1] rounded-none cursor-pointer" title="Reset all filters">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>
              <button type="button" id="cbl-top-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-7 h-7 inline-flex items-center justify-center bg-white border border-[#CBD5E1] rounded-none cursor-pointer" title="Hide Filter">
                <svg id="cbl-top-toggle-icon" class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <div id="cbl-top-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <!-- 1. PLANT -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">PLANT</label>
              <select id="cbl-filter-plant" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Plants</option>
                <option value="DFL UNIT-5 (JPT)">DFL UNIT-5 (JPT)</option>
                <option value="DFL UNIT-3 (PSP)">DFL UNIT-3 (PSP)</option>
                <option value="DFL UNIT-4 (PND)">DFL UNIT-4 (PND)</option>
                <option value="DFL UNIT-1 (VSP)">DFL UNIT-1 (VSP)</option>
              </select>
            </div>

            <!-- 2. CHEMICAL -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">CHEMICAL</label>
              <select id="cbl-filter-chem" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Chemicals</option>
                <option value="Sodium Tripolyphosphate (STPP)">Sodium Tripolyphosphate (STPP)</option>
                <option value="Sodium Metabisulphite (SMS)">Sodium Metabisulphite (SMS)</option>
                <option value="Food-Grade Chlorine Powder">Food-Grade Chlorine Powder</option>
                <option value="Non-Phosphate Moisture Retainer">Non-Phosphate Moisture Retainer</option>
                <option value="Citric Acid Anhydrous">Citric Acid Anhydrous</option>
              </select>
            </div>

            <!-- 3. FROM DATE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">FROM DATE</label>
              <div class="erp-date-wrapper">
                <input type="date" id="cbl-filter-from-date" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 4. TO DATE -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">TO DATE</label>
              <div class="erp-date-wrapper">
                <input type="date" id="cbl-filter-to-date" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>
            </div>

            <!-- 5. YEAR -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">YEAR</label>
              <select id="cbl-filter-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Years</option>
                <option value="2026" selected>2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
              </select>
            </div>

            <!-- 6. SELECT MONTH -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SELECT MONTH</label>
              <select id="cbl-filter-month" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL" selected>All Months</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>

            <!-- Search Button Slot -->
            <div class="sm:col-span-2 md:col-span-2 flex items-end">
              <button type="button" id="cbl-filter-search-btn" class="dt-top-filter-search-btn btn-primary border-0 px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Table Container -->
        <div id="chem-balance-report-table-container"></div>
      </div>
    `;

    // Toggle filter open/close handler
    const toggleBtn = document.getElementById('cbl-top-toggle-btn');
    toggleBtn?.addEventListener('click', () => {
      const body = document.getElementById('cbl-top-filter-body');
      const icon = document.getElementById('cbl-top-toggle-icon');
      if (body) {
        body.classList.toggle('hidden');
        if (body.classList.contains('hidden')) {
          toggleBtn.title = 'Show Filter';
          icon?.classList.add('-rotate-90');
        } else {
          toggleBtn.title = 'Hide Filter';
          icon?.classList.remove('-rotate-90');
        }
      }
    });

    const balData = [
      {
        sNo: 1,
        id: 'CBL-01',
        plant: 'DFL UNIT-5 (JPT)',
        chemical: 'Sodium Tripolyphosphate (STPP)',
        openingKgs: 1500,
        totalPurchaseKgs: 5000,
        totalConsumptionKgs: 1850,
        closingKgs: 4650,
        year: '2026',
        month: '10',
        date: '2026-10-06'
      },
      {
        sNo: 2,
        id: 'CBL-02',
        plant: 'DFL UNIT-3 (PSP)',
        chemical: 'Sodium Metabisulphite (SMS)',
        openingKgs: 800,
        totalPurchaseKgs: 2500,
        totalConsumptionKgs: 950,
        closingKgs: 2350,
        year: '2026',
        month: '10',
        date: '2026-10-06'
      },
      {
        sNo: 3,
        id: 'CBL-03',
        plant: 'DFL UNIT-5 (JPT)',
        chemical: 'Food-Grade Chlorine Powder',
        openingKgs: 600,
        totalPurchaseKgs: 1500,
        totalConsumptionKgs: 720,
        closingKgs: 1380,
        year: '2026',
        month: '10',
        date: '2026-10-05'
      },
      {
        sNo: 4,
        id: 'CBL-04',
        plant: 'DFL UNIT-4 (PND)',
        chemical: 'Non-Phosphate Moisture Retainer',
        openingKgs: 1200,
        totalPurchaseKgs: 3000,
        totalConsumptionKgs: 1400,
        closingKgs: 2800,
        year: '2026',
        month: '10',
        date: '2026-10-05'
      },
      {
        sNo: 5,
        id: 'CBL-05',
        plant: 'DFL UNIT-1 (VSP)',
        chemical: 'Citric Acid Anhydrous',
        openingKgs: 300,
        totalPurchaseKgs: 1000,
        totalConsumptionKgs: 420,
        closingKgs: 880,
        year: '2026',
        month: '10',
        date: '2026-10-04'
      }
    ];

    const renderTable = (data) => {
      new DataTable({
        containerId: 'chem-balance-report-table-container',
        data: data,
        keyField: 'id',
        tableTitle: 'Chemical Stock Balance Summary',
        searchable: true,
        exportable: true,
        pageSize: 10,
        columns: [
          // 1. S.NO
          {
            field: 'sNo',
            header: 'S.NO',
            render: (v, r, i) => `<span class="text-[#5E6C84] font-semibold">${v || (i + 1)}</span>`
          },
          // 2. Chemical
          {
            field: 'chemical',
            header: 'Chemical',
            render: (v) => `<span class="font-bold text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 3. Opening KGs
          {
            field: 'openingKgs',
            header: 'Opening KGs',
            render: (v) => `<span class="font-semibold text-[#5E6C84] whitespace-nowrap">${v != null ? Number(v).toLocaleString() + ' KG' : '—'}</span>`
          },
          // 4. Total Purchase KGs
          {
            field: 'totalPurchaseKgs',
            header: 'Total Purchase KGs',
            render: (v) => `<span class="font-bold text-[#00875A] whitespace-nowrap">${v != null ? Number(v).toLocaleString() + ' KG' : '—'}</span>`
          },
          // 5. Total Consumption KGs
          {
            field: 'totalConsumptionKgs',
            header: 'Total Consumption KGs',
            render: (v) => `<span class="font-bold text-[#DE350B] whitespace-nowrap">${v != null ? Number(v).toLocaleString() + ' KG' : '—'}</span>`
          },
          // 6. Closing KGs
          {
            field: 'closingKgs',
            header: 'Closing KGs',
            render: (v) => `<span class="font-extrabold text-[#0284C7] whitespace-nowrap">${v != null ? Number(v).toLocaleString() + ' KG' : '—'}</span>`
          }
        ],
        actions: [],
        onRowClick: (row) => {
          Toast.show(`${row.chemical}: Opening ${row.openingKgs} KG • Closing ${row.closingKgs} KG`, 'info');
        }
      });
    };

    // Filter Search Execution
    document.getElementById('cbl-filter-search-btn')?.addEventListener('click', () => {
      const fPlant = document.getElementById('cbl-filter-plant')?.value || 'ALL';
      const fChem = document.getElementById('cbl-filter-chem')?.value || 'ALL';
      const fFromDate = document.getElementById('cbl-filter-from-date')?.value || '';
      const fToDate = document.getElementById('cbl-filter-to-date')?.value || '';
      const fYear = document.getElementById('cbl-filter-year')?.value || 'ALL';
      const fMonth = document.getElementById('cbl-filter-month')?.value || 'ALL';

      const filtered = balData.filter(r => {
        if (fPlant !== 'ALL' && r.plant !== fPlant) return false;
        if (fChem !== 'ALL' && r.chemical !== fChem) return false;
        if (fFromDate && r.date && r.date < fFromDate) return false;
        if (fToDate && r.date && r.date > fToDate) return false;
        if (fYear !== 'ALL' && r.year !== fYear) return false;
        if (fMonth !== 'ALL' && r.month !== fMonth) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Applied filters: ${filtered.length} balance record(s) matched`, 'info');
    });

    // Reset filter handler
    const resetBtn = document.getElementById('cbl-top-reset-btn');
    resetBtn?.addEventListener('click', () => {
      if (document.getElementById('cbl-filter-plant')) document.getElementById('cbl-filter-plant').value = 'ALL';
      if (document.getElementById('cbl-filter-chem')) document.getElementById('cbl-filter-chem').value = 'ALL';
      if (document.getElementById('cbl-filter-from-date')) document.getElementById('cbl-filter-from-date').value = '';
      if (document.getElementById('cbl-filter-to-date')) document.getElementById('cbl-filter-to-date').value = '';
      if (document.getElementById('cbl-filter-year')) document.getElementById('cbl-filter-year').value = 'ALL';
      if (document.getElementById('cbl-filter-month')) document.getElementById('cbl-filter-month').value = 'ALL';

      renderTable(balData);
      Toast.show('Filters reset', 'info');
    });

    renderTable(balData);
  },
  // =========================================================================
  // =========================================================================
  // 7. CHEMICAL PAYMENTS LIST SCREEN (CHEMICAL SCREENS TAB 7)
  // =========================================================================
  renderChemicalPaymentsListScreen(container) {
    container.innerHTML = `
      <div class="space-y-4">
        <!-- Top Action & Title Bar -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-0">
          <div>
            <h1 class="text-xl font-extrabold text-[#172B4D]">Chemical Payments List</h1>
          </div>
          <div>
            <button type="button" id="btn-record-chem-pay" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer border-0">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Record Payment</span>
            </button>
          </div>
        </div>

        <!-- Filter / Search Card (SUPPLIER, YEAR) -->
        <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200" style="margin-bottom: 12px !important;">
          <div class="flex items-center justify-between pb-1">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              <h3 class="text-xs font-bold text-[#172B4D] mb-0">Search &amp; Filters</h3>
            </div>
            <div class="inline-flex items-center" style="gap: 8px;">
              <button type="button" id="cpay-top-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-7 h-7 inline-flex items-center justify-center bg-white border border-[#CBD5E1] rounded-none cursor-pointer" title="Reset all filters">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>
              <button type="button" id="cpay-top-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-7 h-7 inline-flex items-center justify-center bg-white border border-[#CBD5E1] rounded-none cursor-pointer" title="Hide Filter">
                <svg id="cpay-top-toggle-icon" class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>

          <div id="cpay-top-filter-body" class="dt-top-filter-body mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <!-- 1. SUPPLIER -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">SUPPLIER</label>
              <select id="cpay-filter-supplier" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-semibold text-[#172B4D]">
                <option value="ALL">All Suppliers</option>
                <option value="Penta Chemicals Corp">Penta Chemicals Corp</option>
                <option value="Godavari BioTech Supplies">Godavari BioTech Supplies</option>
                <option value="Delta Water Technologies">Delta Water Technologies</option>
                <option value="AquaTech Solutions">AquaTech Solutions</option>
                <option value="Alpha Chemicals Ltd">Alpha Chemicals Ltd</option>
              </select>
            </div>

            <!-- 2. YEAR -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0">YEAR</label>
              <select id="cpay-filter-year" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]">
                <option value="ALL">All Years</option>
                <option value="2026" selected>2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
              </select>
            </div>

            <!-- 3. Search Button Slot (Compact, Natural Width) -->
            <div class="flex items-end">
              <button type="button" id="cpay-filter-search-btn" class="dt-top-filter-search-btn btn-primary border-0 px-5 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs hover:shadow cursor-pointer h-[31px]">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Table Container -->
        <div id="chem-payments-table-container"></div>
      </div>
    `;

    // Filter toggle
    const toggleBtn = document.getElementById('cpay-top-toggle-btn');
    toggleBtn?.addEventListener('click', () => {
      const body = document.getElementById('cpay-top-filter-body');
      const icon = document.getElementById('cpay-top-toggle-icon');
      if (body) {
        body.classList.toggle('hidden');
        if (body.classList.contains('hidden')) {
          toggleBtn.title = 'Show Filter';
          icon?.classList.add('-rotate-90');
        } else {
          toggleBtn.title = 'Hide Filter';
          icon?.classList.remove('-rotate-90');
        }
      }
    });

    // Record payment button
    document.getElementById('btn-record-chem-pay')?.addEventListener('click', () => {
      this.showRecordChemicalPaymentModal(container);
    });

    const renderTable = (data) => {
      new DataTable({
        containerId: 'chem-payments-table-container',
        data: data,
        keyField: 'id',
        minWidth: '1450px',
        tableTitle: 'Chemical Payments List',
        searchable: true,
        exportable: true,
        pageSize: 10,
        columns: [
          {
            field: 'sNo',
            header: 'S.NO',
            render: (v, r, i) => `<span class="text-[#5E6C84] font-semibold">${v || (i + 1)}</span>`
          },
          {
            field: 'poNo',
            header: 'PoNo',
            render: (v) => `<span class="font-mono font-bold text-[#00A4B7] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BAE6FD] whitespace-nowrap">${v || '—'}</span>`
          },
          {
            field: 'chemicalName',
            header: 'Chemical Name',
            render: (v) => `<span class="font-bold text-[#172B4D] whitespace-nowrap">${v || '—'}</span>`
          },
          {
            field: 'partyName',
            header: 'Party Name',
            render: (v, r) => `<span class="font-semibold text-[#172B4D] whitespace-nowrap">${v || r.supplier || '—'}</span>`
          },
          {
            field: 'receivedQtyKg',
            header: 'Recieved Quantity (Kgs)',
            render: (v) => `<span class="font-bold text-[#0284C7] whitespace-nowrap">${Number(v || 0).toLocaleString('en-IN')} kg</span>`
          },
          {
            field: 'amount',
            header: 'Amount (Rupees)',
            render: (v) => `<span class="font-bold text-[#172B4D] whitespace-nowrap">₹${Number(v || 0).toLocaleString('en-IN')}</span>`
          },
          {
            field: 'paidAmount',
            header: 'Paid Amount (Rupees)',
            render: (v) => `<span class="font-extrabold text-[#00875A] whitespace-nowrap">₹${Number(v || 0).toLocaleString('en-IN')}</span>`
          },
          {
            field: 'bankRefNo',
            header: 'Bank Reference No',
            render: (v, r) => `<span class="font-mono text-xs font-semibold text-[#5E6C84] whitespace-nowrap">${v || r.transactionRef || '—'}</span>`
          },
          {
            field: 'paymentDate',
            header: 'Payment Date',
            render: (v) => `<span class="text-[#172B4D] whitespace-nowrap">${v || '—'}</span>`
          },
          {
            field: 'remarks',
            header: 'Remarks',
            render: (v) => `<span class="text-[#5E6C84] text-xs whitespace-nowrap max-w-[260px] truncate inline-block" title="${v || ''}">${v || '—'}</span>`
          },
          {
            field: 'status',
            header: 'Status',
            render: (v) => {
              const val = (v || 'PAID').toUpperCase();
              const badgeClass = val === 'PAID' ? 'lozenge-success' : (val === 'PARTIAL' ? 'lozenge-warning' : 'lozenge-danger');
              return `<span class="lozenge ${badgeClass}">${val}</span>`;
            }
          }
        ],
        actions: [
          {
            label: 'Edit',
            icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: (row) => this.showEditChemicalPaymentModal(row, container)
          },
          {
            label: 'Delete',
            icon: `<svg class="w-4 h-4 text-[#FF5630]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Delete Chemical Payment',
                message: `Are you sure you want to delete payment record for <strong class="text-[#00A4B7]">${row.poNo || row.paymentRef}</strong> (${row.partyName || row.supplier})?`,
                confirmText: 'Yes, Delete',
                cancelText: 'Cancel',
                isDestructive: true,
                onConfirm: () => {
                  const idx = this.state.chemicalPayments.findIndex(r => r.id === row.id || (r.poNo && r.poNo === row.poNo) || (r.paymentRef && r.paymentRef === row.paymentRef));
                  if (idx !== -1) {
                    this.state.chemicalPayments.splice(idx, 1);
                    this.state.chemicalPayments.forEach((r, i) => { r.sNo = i + 1; });
                    applyFilter();
                    Toast.show(`Payment record deleted`, 'info');
                  }
                }
              });
            }
          }
        ],
        onRowClick: (row) => {
          this.showChemicalPaymentDetailsModal(row);
        }
      });
    };

    // Filter Logic
    const applyFilter = () => {
      const supplierVal = document.getElementById('cpay-filter-supplier')?.value || 'ALL';
      const yearVal = document.getElementById('cpay-filter-year')?.value || 'ALL';

      let filtered = [...this.state.chemicalPayments];

      if (supplierVal !== 'ALL') {
        filtered = filtered.filter(item => (item.partyName === supplierVal || item.supplier === supplierVal));
      }

      if (yearVal !== 'ALL') {
        filtered = filtered.filter(item => {
          if (item.year) return String(item.year) === yearVal;
          if (item.paymentDate) return item.paymentDate.startsWith(yearVal);
          return true;
        });
      }

      renderTable(filtered);
    };

    document.getElementById('cpay-filter-search-btn')?.addEventListener('click', applyFilter);

    document.getElementById('cpay-top-reset-btn')?.addEventListener('click', () => {
      const selSupplier = document.getElementById('cpay-filter-supplier');
      const selYear = document.getElementById('cpay-filter-year');
      if (selSupplier) selSupplier.value = 'ALL';
      if (selYear) selYear.value = 'ALL';
      renderTable(this.state.chemicalPayments);
      Toast.show('Filters reset', 'info');
    });

    // Initial render
    applyFilter();
  },

  // Record Chemical Payment Modal
  showRecordChemicalPaymentModal(container) {
    const modalId = 'modal-record-chem-pay';
    document.getElementById(modalId)?.remove();

    const backdrop = document.createElement('div');
    backdrop.id = modalId;
    backdrop.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 drawer-backdrop overflow-y-auto animate-fade-in';

    backdrop.innerHTML = `
      <div class="bg-white rounded-lg border border-[#DFE1E6] w-full max-w-2xl flex flex-col max-h-[90vh] overflow-hidden animate-fade-in my-8">
        <div class="px-6 py-4 border-b border-[#DFE1E6] flex items-center justify-between bg-[#FAFBFC]">
          <div>
            <h3 class="text-base font-semibold text-[#172B4D] mb-0">Record Payment</h3>
          </div>
          <button type="button" id="btn-close-record-pay" aria-label="Close dialog" class="text-[#6B778C] hover:text-[#172B4D] p-1.5 rounded hover:bg-[#EBECF0] transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <form id="form-record-chem-pay" class="p-6 space-y-4 overflow-y-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- 1. PONO * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PONO *</label>
              <input type="text" id="rcp-po-no" placeholder="e.g. PO-CHM-2026-006" required class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono" />
            </div>

            <!-- 2. CHEMICAL NAME * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CHEMICAL NAME *</label>
              <select id="rcp-chemical-name" required class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-medium text-[#172B4D]">
                <option value="Sodium Tripolyphosphate (STPP)">Sodium Tripolyphosphate (STPP)</option>
                <option value="Sodium Metabisulphite (SMS)">Sodium Metabisulphite (SMS)</option>
                <option value="Food-Grade Chlorine Powder">Food-Grade Chlorine Powder</option>
                <option value="Non-Phosphate Moisture Retainer">Non-Phosphate Moisture Retainer</option>
                <option value="Citric Acid Anhydrous">Citric Acid Anhydrous</option>
              </select>
            </div>

            <!-- 3. PARTY NAME * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PARTY NAME *</label>
              <select id="rcp-party-name" required class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-medium text-[#172B4D]">
                <option value="Penta Chemicals Corp">Penta Chemicals Corp</option>
                <option value="Godavari BioTech Supplies">Godavari BioTech Supplies</option>
                <option value="Delta Water Technologies">Delta Water Technologies</option>
                <option value="AquaTech Solutions">AquaTech Solutions</option>
                <option value="Alpha Chemicals Ltd">Alpha Chemicals Ltd</option>
              </select>
            </div>

            <!-- 4. RECIEVED QUANTITY * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">RECIEVED QUANTITY *</label>
              <input type="number" id="rcp-qty-kg" placeholder="e.g. 2500" min="0" step="any" required class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 5. AMOUNT * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">AMOUNT *</label>
              <input type="number" id="rcp-amount" placeholder="e.g. 250000" min="0" step="any" required class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 6. BANK REFERENCE NO * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BANK REFERENCE NO *</label>
              <input type="text" id="rcp-bank-ref" placeholder="e.g. UTR-HDFC-261026019" required class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono" />
            </div>

            <!-- 7. PAYMENT DATE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PAYMENT DATE *</label>
              <div class="erp-date-wrapper">
                <input type="date" id="rcp-payment-date" required value="${new Date().toISOString().split('T')[0]}" class="erp-date-input w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
              </div>
            </div>

            <!-- 8. REMARKS -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">REMARKS</label>
              <input type="text" id="rcp-remarks" placeholder="Optional payment remarks..." class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>
          </div>

          <div class="pt-4 border-t border-[#DFE1E6] flex items-center justify-end gap-3">
            <button type="button" id="btn-cancel-record-pay" class="btn-secondary border-0 px-4 py-2 rounded-full text-xs font-semibold cursor-pointer">Cancel</button>
            <button type="submit" class="btn-primary border-0 px-5 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs">
              <span>Save Payment</span>
            </button>
          </div>
        </form>
      </div>
    `;

    document.body.appendChild(backdrop);

    const closeModal = () => backdrop.remove();
    document.getElementById('btn-close-record-pay')?.addEventListener('click', closeModal);
    document.getElementById('btn-cancel-record-pay')?.addEventListener('click', closeModal);
    backdrop.addEventListener('click', (e) => { if (e.target === backdrop) closeModal(); });

    document.getElementById('form-record-chem-pay')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const poNo = document.getElementById('rcp-po-no').value.trim();
      const chemicalName = document.getElementById('rcp-chemical-name').value;
      const partyName = document.getElementById('rcp-party-name').value;
      const receivedQtyKg = parseFloat(document.getElementById('rcp-qty-kg').value) || 0;
      const amount = parseFloat(document.getElementById('rcp-amount').value) || 0;
      const bankRefNo = document.getElementById('rcp-bank-ref').value.trim();
      const paymentDate = document.getElementById('rcp-payment-date').value;
      const remarks = document.getElementById('rcp-remarks').value.trim() || '—';
      const year = paymentDate.split('-')[0] || '2026';

      const newId = 'PAY-CHM-' + Date.now();
      const newRecord = {
        sNo: this.state.chemicalPayments.length + 1,
        id: newId,
        paymentRef: newId,
        poNo,
        chemicalName,
        partyName,
        supplier: partyName,
        receivedQtyKg,
        amount,
        paidAmount: amount,
        bankRefNo,
        transactionRef: bankRefNo,
        paymentDate,
        remarks,
        year,
        status: 'PAID'
      };

      this.state.chemicalPayments.unshift(newRecord);
      this.state.chemicalPayments.forEach((r, i) => { r.sNo = i + 1; });

      closeModal();
      this.renderChemicalPaymentsListScreen(container);
      Toast.show(`Payment recorded successfully for ${poNo}`, 'success');
    });
  },

  // Edit Chemical Payment Modal
  showEditChemicalPaymentModal(row, container) {
    const modalId = 'modal-edit-chem-pay';
    document.getElementById(modalId)?.remove();

    const backdrop = document.createElement('div');
    backdrop.id = modalId;
    backdrop.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 drawer-backdrop overflow-y-auto animate-fade-in';

    backdrop.innerHTML = `
      <div class="bg-white rounded-lg border border-[#DFE1E6] w-full max-w-2xl flex flex-col max-h-[90vh] overflow-hidden animate-fade-in my-8">
        <div class="px-6 py-4 border-b border-[#DFE1E6] flex items-center justify-between bg-[#FAFBFC]">
          <div>
            <h3 class="text-base font-semibold text-[#172B4D] mb-0">Edit Chemical Payment</h3>
            <p class="text-[11px] text-[#5E6C84] font-medium mb-0">Update details for ${row.poNo || row.paymentRef}</p>
          </div>
          <button type="button" id="btn-close-edit-pay" aria-label="Close dialog" class="text-[#6B778C] hover:text-[#172B4D] p-1.5 rounded hover:bg-[#EBECF0] transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <form id="form-edit-chem-pay" class="p-6 space-y-4 overflow-y-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- 1. PONO * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PONO *</label>
              <input type="text" id="ecp-po-no" value="${row.poNo || ''}" required class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono" />
            </div>

            <!-- 2. CHEMICAL NAME * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CHEMICAL NAME *</label>
              <select id="ecp-chemical-name" required class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-medium text-[#172B4D]">
                <option value="Sodium Tripolyphosphate (STPP)" ${row.chemicalName === 'Sodium Tripolyphosphate (STPP)' ? 'selected' : ''}>Sodium Tripolyphosphate (STPP)</option>
                <option value="Sodium Metabisulphite (SMS)" ${row.chemicalName === 'Sodium Metabisulphite (SMS)' ? 'selected' : ''}>Sodium Metabisulphite (SMS)</option>
                <option value="Food-Grade Chlorine Powder" ${row.chemicalName === 'Food-Grade Chlorine Powder' ? 'selected' : ''}>Food-Grade Chlorine Powder</option>
                <option value="Non-Phosphate Moisture Retainer" ${row.chemicalName === 'Non-Phosphate Moisture Retainer' ? 'selected' : ''}>Non-Phosphate Moisture Retainer</option>
                <option value="Citric Acid Anhydrous" ${row.chemicalName === 'Citric Acid Anhydrous' ? 'selected' : ''}>Citric Acid Anhydrous</option>
              </select>
            </div>

            <!-- 3. PARTY NAME * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PARTY NAME *</label>
              <select id="ecp-party-name" required class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-medium text-[#172B4D]">
                <option value="Penta Chemicals Corp" ${(row.partyName === 'Penta Chemicals Corp' || row.supplier === 'Penta Chemicals Corp') ? 'selected' : ''}>Penta Chemicals Corp</option>
                <option value="Godavari BioTech Supplies" ${(row.partyName === 'Godavari BioTech Supplies' || row.supplier === 'Godavari BioTech Supplies') ? 'selected' : ''}>Godavari BioTech Supplies</option>
                <option value="Delta Water Technologies" ${(row.partyName === 'Delta Water Technologies' || row.supplier === 'Delta Water Technologies') ? 'selected' : ''}>Delta Water Technologies</option>
                <option value="AquaTech Solutions" ${(row.partyName === 'AquaTech Solutions' || row.supplier === 'AquaTech Solutions') ? 'selected' : ''}>AquaTech Solutions</option>
                <option value="Alpha Chemicals Ltd" ${(row.partyName === 'Alpha Chemicals Ltd' || row.supplier === 'Alpha Chemicals Ltd') ? 'selected' : ''}>Alpha Chemicals Ltd</option>
              </select>
            </div>

            <!-- 4. RECIEVED QUANTITY * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">RECIEVED QUANTITY *</label>
              <input type="number" id="ecp-qty-kg" value="${row.receivedQtyKg || 0}" min="0" step="any" required class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 5. AMOUNT * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">AMOUNT *</label>
              <input type="number" id="ecp-amount" value="${row.amount || 0}" min="0" step="any" required class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>

            <!-- 6. BANK REFERENCE NO * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BANK REFERENCE NO *</label>
              <input type="text" id="ecp-bank-ref" value="${row.bankRefNo || row.transactionRef || ''}" required class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7] font-mono" />
            </div>

            <!-- 7. PAYMENT DATE * -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PAYMENT DATE *</label>
              <div class="erp-date-wrapper">
                <input type="date" id="ecp-payment-date" required value="${row.paymentDate || ''}" class="erp-date-input w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
              </div>
            </div>

            <!-- 8. REMARKS -->
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">REMARKS</label>
              <input type="text" id="ecp-remarks" value="${row.remarks !== '—' ? (row.remarks || '') : ''}" class="w-full text-xs px-3 py-2 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#0284C7]" />
            </div>
          </div>

          <div class="pt-4 border-t border-[#DFE1E6] flex items-center justify-end gap-3">
            <button type="button" id="btn-cancel-edit-pay" class="btn-secondary border-0 px-4 py-2 rounded-full text-xs font-semibold cursor-pointer">Cancel</button>
            <button type="submit" class="btn-primary border-0 px-5 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span>Update Payment</span>
            </button>
          </div>
        </form>
      </div>
    `;

    document.body.appendChild(backdrop);

    const closeModal = () => backdrop.remove();
    document.getElementById('btn-close-edit-pay')?.addEventListener('click', closeModal);
    document.getElementById('btn-cancel-edit-pay')?.addEventListener('click', closeModal);
    backdrop.addEventListener('click', (e) => { if (e.target === backdrop) closeModal(); });

    document.getElementById('form-edit-chem-pay')?.addEventListener('submit', (e) => {
      e.preventDefault();
      row.poNo = document.getElementById('ecp-po-no').value.trim();
      row.chemicalName = document.getElementById('ecp-chemical-name').value;
      row.partyName = document.getElementById('ecp-party-name').value;
      row.supplier = row.partyName;
      row.receivedQtyKg = parseFloat(document.getElementById('ecp-qty-kg').value) || 0;
      row.amount = parseFloat(document.getElementById('ecp-amount').value) || 0;
      row.paidAmount = row.amount;
      row.bankRefNo = document.getElementById('ecp-bank-ref').value.trim();
      row.transactionRef = row.bankRefNo;
      row.paymentDate = document.getElementById('ecp-payment-date').value;
      row.remarks = document.getElementById('ecp-remarks').value.trim() || '—';
      row.year = row.paymentDate.split('-')[0] || '2026';

      closeModal();
      this.renderChemicalPaymentsListScreen(container);
      Toast.show(`Payment details updated for ${row.poNo}`, 'success');
    });
  },
  // Chemical Payment Details Modal
  showChemicalPaymentDetailsModal(row) {
    const modalId = 'modal-chem-pay-details';
    document.getElementById(modalId)?.remove();

    const backdrop = document.createElement('div');
    backdrop.id = modalId;
    backdrop.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 drawer-backdrop overflow-y-auto animate-fade-in';

    backdrop.innerHTML = `
      <div class="bg-white rounded-lg border border-[#DFE1E6] w-full max-w-xl flex flex-col max-h-[90vh] overflow-hidden animate-fade-in my-8">
        <div class="px-6 py-4 border-b border-[#DFE1E6] flex items-center justify-between bg-[#FAFBFC]">
          <div>
            <h3 class="text-base font-semibold text-[#172B4D] mb-0">Chemical Payment Details</h3>
            <p class="text-[11px] text-[#5E6C84] font-medium mb-0">${row.poNo || row.paymentRef} &bull; ${row.partyName || row.supplier}</p>
          </div>
          <button type="button" id="btn-close-pay-details" aria-label="Close dialog" class="text-[#6B778C] hover:text-[#172B4D] p-1.5 rounded hover:bg-[#EBECF0] transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <div class="p-6 space-y-4 text-xs overflow-y-auto">
          <div class="grid grid-cols-2 gap-4 bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0]">
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">S.NO</span>
              <span class="text-sm font-bold text-[#172B4D] block mt-0.5">${row.sNo || 1}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">PO NO</span>
              <span class="text-sm font-mono font-bold text-[#00A4B7] block mt-0.5">${row.poNo || '—'}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">CHEMICAL NAME</span>
              <span class="text-sm font-bold text-[#172B4D] block mt-0.5">${row.chemicalName || '—'}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">PARTY NAME</span>
              <span class="text-sm font-semibold text-[#172B4D] block mt-0.5">${row.partyName || row.supplier || '—'}</span>
            </div>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div class="p-3 bg-white rounded-lg border border-[#DFE1E6]">
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">RECIEVED QUANTITY</span>
              <span class="text-sm font-extrabold text-[#0284C7] block mt-0.5">${Number(row.receivedQtyKg || 0).toLocaleString('en-IN')} kg</span>
            </div>
            <div class="p-3 bg-white rounded-lg border border-[#DFE1E6]">
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">AMOUNT</span>
              <span class="text-sm font-extrabold text-[#172B4D] block mt-0.5">₹${Number(row.amount || 0).toLocaleString('en-IN')}</span>
            </div>
            <div class="p-3 bg-white rounded-lg border border-[#DFE1E6]">
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">PAID AMOUNT</span>
              <span class="text-sm font-extrabold text-[#00875A] block mt-0.5">₹${Number(row.paidAmount || 0).toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">BANK REFERENCE NO</span>
              <span class="text-xs font-mono font-bold text-[#5E6C84] block mt-0.5">${row.bankRefNo || row.transactionRef || '—'}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">PAYMENT DATE</span>
              <span class="text-xs font-semibold text-[#172B4D] block mt-0.5">${row.paymentDate || '—'}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">STATUS</span>
              <span class="inline-block mt-0.5"><span class="lozenge ${row.status === 'PAID' ? 'lozenge-success' : (row.status === 'PARTIAL' ? 'lozenge-warning' : 'lozenge-danger')}">${row.status || 'PAID'}</span></span>
            </div>
            <div>
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">REMARKS</span>
              <span class="text-xs text-[#5E6C84] block mt-0.5">${row.remarks || '—'}</span>
            </div>
          </div>

          <div class="pt-4 border-t border-[#DFE1E6] flex items-center justify-end">
            <button type="button" id="btn-dismiss-pay-details" class="btn-primary border-0 px-5 py-2 rounded-full text-xs font-bold cursor-pointer">Close</button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(backdrop);

    const closeModal = () => backdrop.remove();
    document.getElementById('btn-close-pay-details')?.addEventListener('click', closeModal);
    document.getElementById('btn-dismiss-pay-details')?.addEventListener('click', closeModal);
    backdrop.addEventListener('click', (e) => { if (e.target === backdrop) closeModal(); });
  },
  // Legacy compatibility screens
  renderChemicalStockScreen(container) {
    this.renderChemicalPosScreen(container);
  },

  renderChemicalUsageLogsScreen(container) {
    this.renderChemicalsConsumptionScreen(container);
  }

};
