// const card = {
//     title: "Get Hired Fast",
//     description: "Master job-ready skills in 6 months. Expert mentors. Real projects. Guaranteed Results.",
//     features: [
//         "95% job placement rate",
//         "Start from N15,000/month",
//         "6 specialized tracks",
//         "1-on-1 mentorship sessions",
//     ]

// }

// document.getElementById("ghf").innerText = card.title;
// document.getElementById("description").innerHTML = card.description;
// const featuresContainer = document.getElementById("feat");

// cards Array of objects
// Array of cards
const cards = [
  {
    hit: 'for School',
    title: 'Eazy Adaptations',
    subtitle: 'Transform your Students into tech leaders. works offline. proven Curriculum. measurable outcomes.',
    features: [
      'Works Without Internet',
      'Ready-to-use Curriculum',
      'Teacher training included',
      'Student progress tracking',
    ],
    cta: 'Request a Demo',
  },
  {
    hit: 'for School',
    title: 'Eazy Adaptations',
    subtitle: 'Transform your Students into tech leaders. works offline. proven Curriculum. measurable outcomes.',
    features: [
      'Works Without Internet',
      'Ready-to-use Curriculum',
      'Teacher training included',
      'Student progress tracking',
    ],
    cta: 'Request a Demo',
  },
  {
    hit: 'for School',
    title: 'Eazy Adaptations',
    subtitle: 'Transform your Students into tech leaders. works offline. proven Curriculum. measurable outcomes.',
    features: [
      'Works Without Internet',
      'Ready-to-use Curriculum',
      'Teacher training included',
      'Student progress tracking',
    ],
    cta: 'Request a Demo',
  },
];


// using cards array of objects
// card 0
document.getElementById('sch01').innerText = cards[0].hit
document.getElementById('sch01').style.color = '#ff5733'
document.getElementById('eazy').innerText = cards[0].title
document.getElementById('feat1').innerText = cards[0].features[0]
document.getElementById('feat2').innerText = cards[0].features[1]
document.getElementById('feat3').innerText = cards[0].features[2]
document.getElementById('feat4').innerText = cards[0].features[3]
document.getElementById('discr').innerText = cards[0].subtitle
document.getElementById('cta').innerText = cards[0].cta

// card 2
document.getElementById('sch02').innerText = cards[1].hit
document.getElementById('sch02').style.color = '#ff5733'
document.getElementById('eazy02').innerText = cards[1].title
document.getElementById('feat02-1').innerText = cards[1].features[0]
document.getElementById('feat02-2').innerText = cards[1].features[1]
document.getElementById('feat02-3').innerText = cards[1].features[2]
document.getElementById('feat02-4').innerText = cards[1].features[3]
document.getElementById('discr02').innerText = cards[1].subtitle
document.getElementById('cta02').innerText = cards[1].cta

// card 3
document.getElementById('sch03').innerText = cards[2].hit
document.getElementById('sch03').style.color = '#ff5733'    
document.getElementById('eazy03').innerText = cards[2].title
document.getElementById('feat03-1').innerText = cards[2].features[0]
document.getElementById('feat03-2').innerText = cards[2].features[1]
document.getElementById('feat03-3').innerText = cards[2].features[2]
document.getElementById('feat03-4').innerText = cards[2].features[3]
document.getElementById('discr03').innerText = cards[2].subtitle
document.getElementById('cta03').innerText = cards[2].cta









// var hit = 'for School'
// let title = 'Eazy Adaptations'
// const subtitle = 'Transform your Students into tech leaders. works offline. proven Curriculum. measurable outcomes.'
// let features = [
//    'Works Without Internet',
//    'Ready-to-use Curriculum',
//    'Teacher training included',
//    'Student progress tracking',
// ]
// const cta = 'Request a Demo'

// object card
const card = {
    hit: 'for School',
    title: 'Eazy Adaptations',
    subtitle: 'Transform your Students into tech leaders. works offline. proven Curriculum. measurable outcomes.',
    features: [
        'Works Without Internet',
        'Ready-to-use Curriculum',
        'Teacher training included',
        'Student progress tracking',
    ],
    cta: 'Request a Demo'
}




// document.getElementsByClassName('sch')[0].innerText = 'for Student'
// document.getElementsByClassName('sch')[0].style.color = '#ff5733'
// document.getElementsByClassName('sch')[1].innerText = hit   
// document.getElementsByClassName('sch')[1].style.color = '#ff5733'
// document.getElementsByClassName('sch')[2].innerText = 'for Business'
// document.getElementsByClassName('sch')[2].style.color = '#ff5733'
// document.getElementById('eazy').innerText = title
// document.getElementById('feat1').innerText = features[0]
// document.getElementById('feat2').innerText = features[1]
// document.getElementById('feat3').innerText = features[2]
// document.getElementById('feat4').innerText = features[3]
// document.getElementById('discr').innerText = subtitle
// document.getElementById('cta').innerText = cta

// using object card
document.getElementById('sch01').innerText = card.hit   
document.getElementById('sch01').style.color = '#ff5733'
document.getElementById('eazy').innerText = card.title
document.getElementById('feat1').innerText = card.features[0]
document.getElementById('feat2').innerText = card.features[1]
document.getElementById('feat3').innerText = card.features[2]
document.getElementById('feat4').innerText = card.features[3]
document.getElementById('discr').innerText = card.subtitle
document.getElementById('cta').innerText = card.cta
