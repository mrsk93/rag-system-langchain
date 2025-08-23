/**
 * Implementation plan
 * Stage 1: Indexing
 * 1. Load the document - pdf, text
 * 2. Chunk the document
 * 3. Generate vector embeddings

 *
 * Stage 2: Using the chatbot
 * 1. Setup LLM 
 * 2. Add retrieval step
 * 3. Pass input + relevant information to LLM
 */

import { indexTheDocument } from './prepare';

const filePath = './dummy-docs.pdf';
indexTheDocument(filePath);