const kiosk = (<any>window)?.kiosk ? (<any>window).kiosk : {
  closeapp: () => {
    console.log('Dummy close app');
  },
  printslip: (data: any) => {
    console.log('Dummy print slip', data);
  },
};

export function useKiosk() {
  return kiosk;
}