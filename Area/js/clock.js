class Clock {
  constructor() {
  this._currentTurn = 1
  this._totalTurn = 4
  this._allDates = [
  'Turn One - 24 April, Morning',
  'Turn two - 24 April, Day',
  'Turn Three - 24 April, Counter-Attack',
  'Turn four - 26-27 April, Consolidation'
  ]
  
this._allRules = [
//rules 1
  `<p><b>Number of battles</b>: 4, see below,</p>
  <p><b>Initiative bonus</b>: N/A, see below</p><h3>First turn</h3>
  <p>The German player is automatically the attacker in all four battles 
   and the entire turn is under Gas attack effects
  The first attacks must be made as follows:</p>
  <p>D-2 attacks C-3</p>
  <p>D-3 attacks C-4</p>
  <p>C-5 attacks B-4</p>
  <p>All these missions are played as The Big Push</p>
  <p>Once all these battles are concluded then the German player 
  may make one more attack into any area of their choosing, 
   play the mission as normal.</p>
  <h3>Gas attack</h3>
  <p>After the first use by the Germans of chlorine gas in January 1915, 
  all armies in World War I were quick to develop chemical gas 
  and countermeasures to gas attacks, such as gas masks. 
  Such equipment was cumbersome and made the defence more difficult. 
  Added to that was the fact that the gas was heavier than air 
  and so it sank into the trenches. 
  Thus, during the first turn all BEF Firestorm Troop values 
  and defences for the trenches are halved. 
  This means you get 1 rifle section instead of 2, 
  2 Vickers HMG instead of 4 
  and 1 HMG nest instead of 2.</p>`,
<!-- rules2 -->
  `<p><b>Number of battles:</b> 5</p>'
  <p><b>Initiative bonus:</b> Germans receive a +1 on initiative and win on ties</p>
  <p><b>Special modifer:</b> The winner of the last battle adds +1 to their initiative.
  etc!!!</p>
  <h3>Reinforcements And Withdrawal</h3>
  <p>At the end of the turn remove any remaining tank
  Firestorm Troops from the game. After you have done
  this you may place the following reinforcements</p>
  <h3>German Imperial Army:</h3>
  <p>2x HMG platoons, these may be placed one each in any
  German controlled area. They can be placed separately or
  together as the German player wishes</p>
  <h3>British Expeditionary Force</h3>
  <p>2x 13th Bde AIF (Veteran Infantry) in Cachy (A-3) or
  any adjacent area.</p>
  <p>2x 15th Bde AIF (Veteran Infantry) in Fouilloy (B-1) or
  any adjacent area.</p>
  <p>Both Firestorm Troops form the same Brigade must be
  placed together in the same area. They will then lead the
  attack in turn 3.</p>`,
<!-- rules 3 -->
  `<p><b>Number of battles:</b> 2 Night-attack battles + 3 more for
  a total of 5</p>'
  <p><b>Initiative bonus:</b> AIF are automatically attackers in
  the first two battles, after that the BEF receive a +1 on
  initiative and win on ties</p>
  <p><b>Special modifer:</b> The winner of the last battle adds +1
  to his initiative</p>
  <h3>Third Turn</h3>
  <p>Start by playing two Night Fight battles. These are
  fought using the rules for Darkness (page 273), so
  the entire battles will be fought using the Night Fight
  rules. The two Australian Brigades, the 13th Bde AIF
  and 15th Bde AIF must make one attack each in any
  German controlled area adjacent to theirs using both
  AIF Firestorm troops for these engagements. Play the
  battle as normal with the Australians as the attacker. In
  addition to using the Night Fight Rules, there can be
  no tanks during the night – they could not operate in
  the dark and the German forces start the game pinned
  down. This is to reflect the surprise of the attack which
  was conducted without a preliminary bombardment.</p>
  <p>After these two battles, play three more engagements/
  battles as normal. These are fought in daylight. The
  tide has turned and now the BEF receives a +1 bonus on
  initiative as well as winning on ties. The side that won
  the last battle gets an extra +1 bonus on initiative on the
  next engagement</p>`,
<!-- rules 4 -->
  `<p><b>Number of battles:</b> 3</p>'
  <p><b>Initiative bonus:</b> The BEF receive a +1 on initiative and
  win on ties</p>
  <p><b>Special rules:</b> The winner of the last battle adds +1
  to his initiative</p>
  <h3>Fourth Turn</h3>
  <p>Play three engagements. The BEF receives a +1 bonus on
  initiative as well as winning on ties. The side that won
  the last battle gets an extra +1 bonus on initiative on the
  next engagement</p>
  <h3>Tidy up the lines</h3>
  <p>At the end of the Forth turn any area that is cut off and
  out of supply is captured by the side that has them cut
  off. All Firestorm Troops in these areas are captured</p>
  <p>Total your victory points at the
  end of the turn and determine
  the winner of Firestorm: Villers-Bretonneux.</p>`
]

this._allDescriptions = [
<!-- discription 1 -->
  `<i><p>We looked towards the line and through the trees a sudden flickering was seen, like summer lightning. Like a sudden
  thundershower, the wood was drenched with all kinds of shell, including gas. ‘Get the men out into the open’ shouted the
  company commander.</p>
  <p>- Lieutenant F.S. Mason</p></i>
  <p>The German attack was preceded by an artillery barrage,
  using both mustard gas and high explosive rounds. The
  German infantry with fourteen supporting A7V tanks broke
  through the 8th Division, making a three mile wide gap in
  the British lines. The 8th Division had been one of the elite
  of the BEF but had suffered heavy losses during the German
  spring offensive Operation Michael and had received young
  and unexperienced troops to cover their losses. The front at
  Villers-Bretonneux had been recently established after the
  BEF had been pushed back during the German offensive so
  troops from both sides had not had time to dig complex
  trenches. The determined German onslaught broke through
  the thinly defended BEF line and pushed towards Villers
  Bretonneux.</p>`,
<!-- discription 2 -->
  `<i><p>So we had met our rivals at last! For the first time in history tank was encountering tank!</p>
  <p>Frank Mitchell (First published in Everyman at War 1930)</p></i>
  <p>After breaking through the BEF trenches the Germans
  pushed on towards their objectives, and captured the town
  of Villers-Bretonneux and part of D’Arquenne Wood.
  Following the loss of Villers-Bretonneux, General Rawlins
  took measures to stop the offensive and recapture lost
  ground. Local counterattacks were ordered, but the 8th
  Division had been badly mauled and was unable to take
  offensive measures. Two companies of tanks were present
  and were ordered to engage the German units. No 1 section
  of A Company had one male and two female Mark IV tanks.
  It was dispatched to the Cachy switch line. There, for the
  first time on the field of battle, tanks from opposing forces
  met when the British tanks encountered “Nixe” of Abteilung
  III under the command of 2nd Lt. Wilhelm Biltz. The two
  female tanks (armed only with machine-guns) suffered
  damage and were forced to withdraw. But the male tank
  under the command of Lieutenant Frank Mitchell then
  hit the German tank three times. The German tank was
  immobilised and the crew of eighteen attempted to escape
  while Mitchell’s tank continued to fire at them, killing nine
  crew members. The British tank then faced two more A7Vs
  and German infantry, but the German tanks withdrew
  after the Mark IV had fired several ranging shots. After
  the German tanks retreated, seven Whippet tanks from X
  company arrived. These attacked the German infantry in
  the open, causing heavy casualties. They were then attacked
  by German artillery and three were destroyed. Elsewhere
  the German attack began to falter. General Foch ordered
  Rawlinson to recapture Villers-Bretonneux and the 13th
  and 15th AIF Brigades that were in reserve were ordered
  to attack. General Glasgow commander of the 13th AIF
  Brigade refused to attack during daylight hours commenting
  that:</p>
  <p>“If it was God Almighty who gave the order, we couldn’t do
  it in daylight. Here is all your artillery out of action and the
  enemy with all his guns in position.”</p>
  <p>The counter-attack was postponed until after dark.</p>`,
  
  
  `<i><p>They [the Germans] had no chance in the wild onslaught of maddened men…they were killed and killed. Bayonets passed with
  ease through grey clad bodies, and were withdrawn with a sucking sound…One huge Australian advanced firing a Lewis Gun
  from the shoulder, spraying the ground with lead…One saw running forms in the dark, and the flashes of rifles, then the evil pyre
  in the town flared and showed to their killers white faces of Germans lurking in shell holes, or flinging away their arms and trying
  to escape, only to be stabbed or shot down as they ran.</p>
  <p>- Sergeant Walter Downing of the Australian 57TH Infantry Battalion</p>
  <p>It was 2.30 when General Glasgow returned to General Heneker at Glisy and resumed the conference upon the plans. He told
  Heneker that he had decided to start from a north south line - said to be clear of the enemy-between the wood and Cachy village,
  and to attack eastwards, south of the wood, and past the south of Villers-Bretonneux</p>
  <p>“But you can’t do that,” was the reply. “The corps commander says the attack is to be made from Cachy.”</p>
  <p>"Why, it’s against all the teaching of your own army, Sir, to attack across the enemy’s front. They’d get hell from the right.’’</p>
  <p>Attacking eastwards he would have his right protected and could do something to protect his left by dropping troops as he
  advanced, to deal with the wood</p>
  <p>“Tell us what you want us to do, Sir,” he said, “but you must let us do it our own way.”</p>
  <p>- Official History of Australian in the War of 1914 – 1918, volume V – The Australian Imperial Force in France during the
  Main German Offensive, 1918 – Chapter XVI</p></i>
  <p>The Australian Imperial Force accomplished its attack before
  the Germans had been able to reinforce their position
  properly. The German machine-guns took their toll on the
  Australians, but by the morning they had been overrun and
  the Australians had almost surrounded Villers-Bretonneux.
  What followed during the day were a series of engagements.
  The Germans failed to consolidate the territory they had
  captured the day before and were soon pushed back</p>
  <i>
  <p>War Office, 11th July, 1918</p>
  <p>His Majesty the KING has been graciously pleased to approve
  of the award of the Victoria Cross to the undermentioned
  Officers and Non-Commissioned Officer: —</p>
  <p>[...]</p>
  <p>On 24/25 April 1918 at Villers-Bretonneux, France,
  Lieutenant Sadlier’s platoon had to advance through a wood
  where a strong enemy machine-gun post was causing casualties
  and preventing the advance. Although he was himself
  wounded, Lieutenant Sadlier at once collected his bombing
  section and led them against the machine-guns, killing the
  crews and capturing two of the guns. By this time his party
  were all casualties and alone he attacked a third enemy
  machine-gun with his revolver, killing the crew and taking
  the gun. In doing so, he was again wounded.The very gallant
  conduct of this officer was the means of clearing the flank, and
  allowing the battalion to move forward, thereby saving a most
  critical situation. His coolness and utter disregard of danger
  inspired all.</p>
  <p>Lieutenant Clifford Sadlier AIF (1982-1964)</p></i>`,
  
  `<i><p>The enemy, however, did not succeed in attaining his objectives, which were the villages of Fouilloy, south of Corbie, and Cachy,
  west of Viller-Bretonneux, and the temporary progress which the enemy was able to make near Villers-Bretonneux was paid for in
  heavy sacrifices of blood…</p>
  <p>- The Scarborough Mercury</p></i>
  <p>After two hard fought days and heavy casualties on both
  sides, the BEF still held the initiative and recaptured most
  of what the Germans had gained the first day. Both sides
  consolidated their positions and the battle continued for a
  while longer, but the major fighting was over. All the German
  army had to show for their efforts was a section of the BEF
  trench line. This would be their final offensive against
  Amiens, as in August the Allies would launch their Hundred
  Days Offensive - starting with the Battle of Montdidier
  and leading to the collapse of German morale on the 8th
  of August. The day which Erich Ludendorff would call “the
  Black day of the German Army”.</p> `
]
  }
get turn() {
return this._currentTurn
// console.log(this._currentTurn)
}

get date() {
let result = this._allDates[this._currentTurn - 1]
return result
//console.log(result)
}

get specialRules() {
let result = this._allRules[this._currentTurn - 1]
return result
//console.log(result)
}

get description() {
let result = this._allDescriptions[this._currentTurn - 1]
return result
//console.log(result)
}

   nextTurn() {
    if(this._currentTurn <4){
      let result = this._currentTurn += 1 
      return result 
      console.log(result)
      }
    }
}

let clock = new Clock()
console.log(clock.turn)
console.log(clock.date)
console.log(clock.specialRules)
console.log(clock.description)
