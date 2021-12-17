const Service = require('../model/service_model');
var { ObjectID } = require('mongodb');

var url = `https://therapidhiredev.herokuapp.com/`;

exports.create = (req, res) => {
  console.log("----",req.file)
  var services = new Service({
    title:req.body.title,
    image:`${url}${req.file.path}`,
    description:req.body.description,
    alt:req.body.alt,
  });
  console.log(req.body)
  services.save().then((doc) => {
    (doc.isNew === false)
    res.status(200).send(doc);
  }, (e) => {
    res.status(400).json({ success: false, message: e.message })
  });
};

exports.findAll = (req, res) => {
  Service.find()
.then((services) => {
  
   res.status(200).send(services);
  }, (e) => {
    res.status(500).send(e);
  })
};

exports.findOne = (req, res) => {
var id = req.params.id;
if (!ObjectID.isValid(id)) {
   return res.status(404).send();
}
Service.findById(id)
.then((services) => {
     if (!services) {
         return res.status(404).send();
     }
     res.status(200).send(services);
}).catch((e) => {
   res.status(500).send();
});
};


exports.delete = (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Service.findByIdAndRemove(id).then((services) => {
       if (!services) {
          return res.status(404).send();
       }
       res.status(200).send({message:"data deleted successfully..."});
  }).catch((e) => {
    res.status(400).send();
  });
};

exports.update = (req, res) => {
    var bannerObj = {
      title:req.body.title,
      image:`${url}${req.file.path}`,
      description:req.body.description,
      alt:req.body.alt,
    }
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send({ message: "Id Not Found" });
  }
  Service.findByIdAndUpdate(id,bannerObj, { new: true })
    .then((services) => {
      res.status(200).send({ message: "your data successfully updated....", data: services });
    }).catch((e) => {
      res.status(400).send({ message: e.message });
    })
};
