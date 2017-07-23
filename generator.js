
module.exports.generate = () => {
  var murdered_person = [
    "A local bee keeper",
    "A local archaeologist",
    "A local historian",
    "A local cider maker",
    "A local unpopular businessman",
    "A local sculptor",
    "The village bovine inseminator",
    "A local arsonist",
    "A local eccentric Shakespearian actor",
    "A local owl breeder",
    "A local hermit with a dark secret",
    "A local miller",
    "A local critic of contemporary architecture",
    "A local poacher",
    "A local uncompromising environmentalist",
    "A local inexplicably celebrated poet",
    "A local mayor",
    "A local spinster",
    "A popular marine biologist",
    "A local pigeon enthusiast",
    "The local magistrate",
    "A local rose hybrid creator",
    "A local antiquarian book dealer",
    "A local badger whisperer",
    "A local fencing instructor",
    "A local violin maestro",
    "A local jam magnate",
    "A local candle maker",
    "A local hedgehog rescue activist",
    "A local travel writer",
    "A local busybody",
    "A local bagpiper",
    "A local thatcher",
    "A local undertaker",
    "A local philosopher",
    "An unexpected visitor",
    "A local narrator",
    "The local viscount",
    "A local astronomer",
    "A local computer programmer"];

  var cause_of_death = [
    "entombed in a statue",
    "in a tank with an octopus named Fred wrapped around the body",
    "crushed to death by apples",
    "strapped to an enormous cheese wheel",
    "stung to death by deliberately enraged bees",
    "drowned in cider",
    "decoupaged to a 1950s walnut veneer sideboard",
    "strangled by a scarf",
    "drowned in a TV monitor filled with red wine",
    "dropped from an aeroplane",
    "stewed in a vat of his own juices",
    "lightly roasted with lemon and thyme stuffing",
    "covered with truffle oil and mauled to death by a boar",
    "in the river, weighted down with a tombstone from a local graveyard",
    "pecked to death by owls",
    "impaled on a centuries-old maypole",
    "drowned in a manner eerily reminiscent of an event in local folklore",
    "electrocuted by a sabotaged Theremin",
    "slumped over a historically significant sundial",
    "strangled with the cord of his own metal detector",
    "exsanguinated on an heirloom variety rose bush",
    "in a church vault being opened by local archaeologists",
    "crushed under a fallen piece of stage equipment on the opening night of Macbeth",
    "garroted with a very distinctive set of lute strings",
    "under a tractor that is not his usual tractor",
    "baked into an oversized sponge cake",
    "poisoned with a local variety of toadstool",
    "buried neck-deep in pudding and eaten by Pudding Ants",
    "stuffed inside an 18th century cor anglais",
    "entombed in a large croquembouche",
    "encased in a giant candle",
    "crushed in a dark satanic mill",
    "bored to death by formulaic TV series",
    "stuffed full of nuts by squirrels",
    "with intestines smeared over the local stone circle",
    "with a golden arrow through the heart",
    "smothered in potpourri",
    "set up like a scarecrow",
    "crushed under the world's biggest scone",
    "dead clutching a book about witchcraft",
    "torn apart by hedgehogs",
    "stuffed full of battenberg",
    "desiccated by magnesium perchlorate",
    "suffocated in a vat of fairy floss",
    "eaten by Cromer crabs",
    "bludgeoned by a croquet mallet",
    "paved into the village thoroughfare",
    "quilted to death" ];

  var village_group = [
    "medieval reenactment society",
    "choir",
    "patron saint",
    "army base",
    "chess club",
    "Floral Society",
    "obsessive history buffs",
    "vicar's son newly returned from university and full of reformist ideas",
    "company of morris dancers",
    "immigrant",
    "cult leader",
    "prodigal son",
    "chamber of commerce",
    "amateur drama group",
    "church community",
    "twins",
    "brass band",
    "madrigal enthusiasts",
    "ghost hunters society",
    "ghost",
    "financially-embarrassed aristocrat",
    "UFO buff",
    "poacher",
    "witch",
    "New Age commune",
    "teen computer hacker",
    "impetuous young heir",
    "scout troop",
    "cosplay society",
    "suspicious out-of-towners",
    "society of Venus watchers",
    "short-wave radio club" ];

  var angry_at = [
    "parking restrictions",
    "researchers who don't understand how much this all means to the village",
    "a proposed zoo",
    "the opening of a McDonald's store",
    "the decline of the red squirrel population from squirrel pox",
    "modernity itself",
    "a big movie shoot taking place in the town",
    "redevelopment on the land of a down-on-his-luck aristocrat",
    "new beekeeping methods",
    "multiculturalism",
    "a charismatic out-of-towner",
    "someone who doesn't yet know they're actually the killer's daughter",
    "musical innovation",
    "the new deer sanctuary",
    "meddling ornithologists",
    "equestrian tourism",
    "badger culling",
    "the end of local tobacco production",
    "local witchcraft practices",
    "the local ghost walk",
    "a museum dedicated to an obscure local poet",
    "owls",
    "redevelopment and/or radical Islam",
    "a plan to sell off the mansion",
    "a forthcoming eclipse",
    "a controversial judging decision in the Midsomer Pig Show",
    "climate change",
    "a new wind farm",
    "all-encompassing whiteness",
    "the cultural and economic hegemony of Causton",
    "Dutch Elm Disease",
    "the arrival of a touring pantomime",
    "a planned biography of a deceased local identity" ];

    var threatened = [
      "the annual cheese festival",
      "rambling rights",
      "to expose the church's historical manuscript as a forgery",
      "to overshadow the sheepdog trials",
      "the town's largely potpourri-based economy",
      "centuries of ultimately pointless tradition",
      "what little sexual tension the town has left",
      "a legendary Anglo-Saxon treasure hoard",
      "the village's unbroken winning streak at the county honey fair",
      "to dredge up events from twenty-five years ago",
      "lace doily production levels",
      "the local deer sanctuary",
      "to ruin the pub",
      "badgers",
      "to make the sun set on the British Empire",
      "England’s green and pleasant land",
      "the future of Morris Dancing",
      "the very survival of England",
      "near-lethal levels of tweeness",
      "the Barnabys' marriage",
      "an annual cricket match that everyone really cares about for some reason",
      "crop circles",
      "the trout pond",
      "to destroy the boarding school’s secret society",
      "otters",
      "a huge annual event in Midsomer that we’re nonetheless only hearing about for the first time",
      "a nearby grotto associated with a medieval saint",
      "to set off unexploded bombs from WWII",
      "caravaning",
      "the great bake off",
      "the local winery",
      "the local rabbit show",
      "to expose a web of sex, blackmail and lies",
      "duffle coat production",
      "drone deliveries",
      "the closure of the local discotheque",
      "the biggest and most beautiful wisteria in the country",
      "a further nine seasons of this nonsense" ];

  var rands = [Math.floor ( Math.random() * murdered_person.length ), Math.floor ( Math.random() * cause_of_death.length ), Math.floor ( Math.random() * village_group.length ), Math.floor ( Math.random() * angry_at.length ), Math.floor ( Math.random() * threatened.length )];

  return murdered_person[rands[0]] + " is found " + cause_of_death[rands[1]] +". Suspicion falls on the village "+ village_group[rands[2]] + ", angry that " + angry_at[rands[3]] + " might threaten " + threatened[rands[4]]+".";
};
