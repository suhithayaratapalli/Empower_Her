import { supabase } from '../config/supabaseClient.js';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';

export const createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { name, email, password, age, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const { data, error } = await supabase
    .from('users')
    .insert([{ name, email, password: hashedPassword, age, role }]);

  if (error) {
    if (error.code === '23505') {
      return res.status(409).json({ message: 'Email already exists' });
    }
    return res.status(500).json({ message: error.message });
  }

  res.status(201).json({ message: 'User created successfully' });
};

export const getAllUsers = async (req, res) => {
  const { data, error } = await supabase
    .from('users')
    .select('id, name, email, age, role, created_at');

  if (error) return res.status(500).json({ message: error.message });

  res.json(data);
};

export const getUserById = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from('users')
    .select('id, name, email, age, role, created_at')
    .eq('id', id)
    .single();

  if (!data) return res.status(404).json({ message: 'User not found' });
  if (error) return res.status(500).json({ message: error.message });

  res.json(data);
};

export const updateUser = async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase
    .from('users')
    .update(req.body)
    .eq('id', id);

  if (error) return res.status(500).json({ message: error.message });

  res.json({ message: 'User updated successfully' });
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase.from('users').delete().eq('id', id);

  if (error) return res.status(500).json({ message: error.message });

  res.json({ message: 'User deleted successfully' });
};
