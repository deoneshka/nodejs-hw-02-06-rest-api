const express = require('express');
const router = express.Router();
const Joi = require('joi');
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require('../../model');

const contactSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required(),
  phone: Joi.number().min(6).required(),
});

router.get('/', async (req, res, next) => {
  try {
    const contacts = await listContacts();

    return res.json({
      status: 'success',
      code: 200,
      data: {
        result: contacts,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.get('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;

  try {
    const contact = await getContactById(contactId);

    if (!contact) {
      res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Contact with this id not found',
      });
      return;
    }

    res.json({
      status: 'success',
      code: 200,
      data: {
        result: contact,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  const { error } = contactSchema.validate(req.query);

  try {
    if (error) {
      res.status(400).json({
        status: 'error',
        code: 400,
        message: `Missing required name field. ${error.message}`,
      });
      return;
    }

    const newContact = await addContact(req.query);

    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result: newContact,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;

  try {
    const contact = await getContactById(contactId);

    if (!contact) {
      res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Contact with this id not found',
      });
      return;
    }

    await removeContact(contactId);

    res.json({
      status: 'success',
      code: 200,
      message: 'Contact deleted',
    });
  } catch (error) {
    next(error);
  }
});

router.put('/:contactId', async (req, res, next) => {
  const body = req.query;
  const { contactId } = req.params;
  const { error } = contactSchema.validate(body);

  try {
    if (error) {
      res.status(400).json({
        status: 'error',
        code: 400,
        message: `Missing fields. ${error.message}`,
      });
      return;
    }

    const contact = await getContactById(contactId);

    if (!contact) {
      res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Contact with this id not found',
      });
      return;
    }

    const updatedContact = await updateContact(contactId, body);
    res.json({
      status: 'success',
      code: 200,
      data: {
        result: updatedContact,
      },
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
