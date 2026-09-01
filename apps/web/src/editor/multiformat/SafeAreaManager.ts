export const SAFE_AREAS = {
  story: {
    top: 250,
    bottom: 250,
  },
  feed: {
    top: 80,
    bottom: 80,
  },
};

export function checkSafeArea(element:any, format:string){
  return {
    valid:true,
    element,
    format,
  };
}
