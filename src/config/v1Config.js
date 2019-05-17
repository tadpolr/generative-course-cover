/*
 * V1Config
 *
 * There are 2 config types in V1
 * - row && column config
 *   - Configure row and column properties such as rowCount, columnCount and offset.
 * - elementConfig
 *   - Configure each element properties.
 *   - Each element will random values in each properties.
 *   - After rendered, the next element can be offset by add value of offsetModuleX and offsetModuleY
 *   - isVisiblePercent specify the percent that each element will be shown
 */
const v1Config = () => {
  return {
    // row && column config
    rowCount: 30,
    columnCount: 10,
    offsetColumn: null,
    offsetRow: 60,
    // element config
    radius: [60, 120, 240],
    strokeWeight: 2,
    strokeColor: [
      { value: '#FBAA19', count: 1 },
      { value: '#4C60F8', count: 1 },
      { value: '#0D123C', count: 1 },
    ],
    fillColor: [
      { value: '#FFFFFF', count: 3 },
      { value: '#FBAA19', count: 10 },
      { value: 'rgba(255,255,255,0.7)', count: 5 },
      { value: '#4C60F8', count: 2 },
      { value: '#0D123C', count: 2 },
    ],
    offsetModuleX: 0,
    offsetModuleY: 0,
    isVisiblePercent: 30,
  };
};
