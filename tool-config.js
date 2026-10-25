export const tool = {
  "id": "E010",
  "title": "항력 한 값 계산기",
  "inputs_text": "항력계수 C_D [무차원], 밀도 ρ [kg/m³], 속도 V [m/s], 기준면적 A [m²]",
  "formula": "D = C_D ρ V² A / 2",
  "output_text": "항력 크기 D [N]",
  "assumptions": "C_D,V≥0, ρ,A>0. 항력계수에 쓰인 기준면적·Re·Mach·형상 조건을 입력값과 일치시킨다. 형상만으로 계수를 자동 추천하지 않는다.",
  "purpose": "공기저항 항력 계산 / 풍동 계수로 하중 검산",
  "sources": [
    {
      "label": "NASA Glenn · Drag Equation",
      "url": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/drag-equation/"
    }
  ],
  "slug": "eng-drag-force",
  "category": "유체",
  "result_label": "항력 D",
  "result_dimension": "force",
  "fields": [
    {
      "key": "cd",
      "label": "항력계수 C_D",
      "dimension": "ratio",
      "example": 0.5,
      "constraint": "nonnegative",
      "display_unit": "1",
      "display_value": "0.5"
    },
    {
      "key": "rho",
      "label": "밀도 ρ",
      "dimension": "density",
      "example": 1.2,
      "constraint": "positive",
      "display_unit": "kgm3",
      "display_value": "1.2"
    },
    {
      "key": "v",
      "label": "속도 V",
      "dimension": "speed",
      "example": 10,
      "constraint": "nonnegative",
      "display_unit": "ms",
      "display_value": "10"
    },
    {
      "key": "a",
      "label": "계수에 대응하는 기준면적 A",
      "dimension": "area",
      "example": 2,
      "constraint": "positive",
      "display_unit": "m2",
      "display_value": "2"
    }
  ],
  "site": "https://nanalab.kr/eng-drag-force/",
  "repository": "https://github.com/NaNaCompany/eng-drag-force",
  "condition": "",
  "output_unit": "N"
};
