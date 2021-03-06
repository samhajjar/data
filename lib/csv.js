function getGranularite(code) {
  if (code === 'FRA') {
    return 'pays'
  }

  if (code === 'WORLD') {
    return 'monde'
  }

  if (code.startsWith('REG')) {
    return 'region'
  }

  if (code.startsWith('DEP')) {
    return 'departement'
  }

  if (code.startsWith('COM')) {
    return 'collectivite-outremer'
  }

  throw new Error('Type de granularité inconnu')
}

/* eslint camelcase: off */
function jsonToCsvRow(json) {
  return {
    date: json.date,
    granularite: getGranularite(json.code),
    maille_code: json.code,
    maille_nom: json.nom,
    cas_confirmes: 'casConfirmes' in json ? json.casConfirmes : '',
    cas_ehpad: 'casEhpad' in json ? json.casEhpad : '',
    cas_confirmes_ehpad: 'casConfirmesEhpad' in json ? json.casConfirmesEhpad : '',
    cas_possibles_ehpad: 'casPossiblesEhpad' in json ? json.casPossiblesEhpad : '',
    deces: 'deces' in json ? json.deces : '',
    deces_ehpad: 'decesEhpad' in json ? json.decesEhpad : '',
    reanimation: 'reanimation' in json ? json.reanimation : '',
    hospitalises: 'hospitalises' in json ? json.hospitalises : '',
    nouvelles_hospitalisations: 'nouvellesHospitalisations' in json ? json.nouvellesHospitalisations : '',
    nouvelles_reanimations: 'nouvellesReanimations' in json ? json.nouvellesReanimations : '',
    gueris: 'gueris' in json ? json.gueris : '',
    depistes: 'depistes' in json ? json.depistes : '',
    source_nom: (json.source && json.source.nom) || '',
    source_url: (json.source && json.source.url) || '',
    source_archive: (json.source && json.source.archive) || '',
    source_type: json.sourceType
  }
}

module.exports = {jsonToCsvRow}
