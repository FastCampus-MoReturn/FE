import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

type Owners = {
  [key: string]: Owner;
};

type Owner = {
  name: string;
  rank: string;
  share: string;
  ownerAddress: string;
  age: string;
};

type DebtorList = {
  [key: string]: string;
};

export interface PdfState {
  uniqueNumber: string; // 등기부등본 고유번호
  maxFloor: string; //   최고층수
  address: string; // 등기부등본주소
  owner: Owners; // 소유자리스트
  exclusiveArea: number; //   전용면적
  SumJeonse_deposit: number; // 보증금의 전세 합
  jeonseAuthorityList: DebtorList; // 전세권자리스트
  mortgageCount: number; // 근저당건수
  mortgageeList: DebtorList; // 근저당권자리스트
  sumMax_mortgageBond: number; // 채권최고액의 근저당합
  pledgeCount: number; // 질권설정건수
  pledgeCreditorList: DebtorList; // 질권 설정 채권자 리스트
  sumPledge: number; // 질권설정 채권액의 합
  attachmentCount: number; // 압류건수
  sumAncillary_Attachment: number; // 가압류 청구금액의 합
  attachmentList: DebtorList; //  압류 채권자 리스트
  printingDate: string; // 열람일시
}

const initialState: PdfState = {
  uniqueNumber: '', // 등기부등본 고유번호
  maxFloor: '', //   최고층수
  address: '', // 등기부등본주소
  owner: {}, // 소유자리스트
  exclusiveArea: 0, //   전용면적
  SumJeonse_deposit: 0, // 보증금의 전세 합
  jeonseAuthorityList: {}, // 전세권자리스트
  mortgageCount: 0, // 근저당건수
  mortgageeList: {}, // 근저당권자리스트
  sumMax_mortgageBond: 0, // 채권최고액의 근저당합
  pledgeCount: 0, // 질권설정건수
  pledgeCreditorList: {}, // 질권 설정 채권자 리스트
  sumPledge: 0, // 질권설정 채권액의 합
  attachmentCount: 0, // 압류건수
  sumAncillary_Attachment: 0, // 가압류 청구금액의 합
  attachmentList: {}, //  압류 채권자 리스트
  printingDate: '', // 열람일시
};

export const pdfSlice = createSlice({
  name: 'pdf',
  initialState,
  reducers: {
    PDFAction: (state, action: PayloadAction<PdfState>) => {
      state.uniqueNumber = action.payload.uniqueNumber;
      state.maxFloor = action.payload.maxFloor;
      state.address = action.payload.address;
      state.owner = action.payload.owner;
      state.exclusiveArea = action.payload.exclusiveArea;
      state.SumJeonse_deposit = action.payload.SumJeonse_deposit;
      state.jeonseAuthorityList = action.payload.jeonseAuthorityList;
      state.mortgageCount = action.payload.mortgageCount;
      state.mortgageeList = action.payload.mortgageeList;
      state.sumMax_mortgageBond = action.payload.sumMax_mortgageBond;
      state.pledgeCount = action.payload.pledgeCount;
      state.pledgeCreditorList = action.payload.pledgeCreditorList;
      state.sumPledge = action.payload.sumPledge;
      state.attachmentCount = action.payload.attachmentCount;
      state.sumAncillary_Attachment = action.payload.sumAncillary_Attachment;
      state.attachmentList = action.payload.attachmentList;
      state.printingDate = action.payload.printingDate;
    },
    // 안쓸 확률이 큼
    resetAction: (state) => {
      state.uniqueNumber = '';
      state.maxFloor = '';
      state.address = '';
      state.owner = {};
      state.exclusiveArea = 0;
      state.SumJeonse_deposit = 0;
      state.jeonseAuthorityList = {};
      state.mortgageCount = 0;
      state.mortgageeList = {};
      state.sumMax_mortgageBond = 0;
      state.pledgeCount = 0;
      state.pledgeCreditorList = {};
      state.sumPledge = 0;
      state.attachmentCount = 0;
      state.sumAncillary_Attachment = 0;
      state.attachmentList = {};
      state.printingDate = '';
    },
  },
});

export const { PDFAction, resetAction } = pdfSlice.actions;

export const selectPDF = (state: RootState) => state.pdf;

export default pdfSlice.reducer;
