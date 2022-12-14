import type {HydratedDocument} from 'mongoose';
import moment from 'moment';
import type {Comment, PopulatedComment} from '../comments/model';
import {Types} from "mongoose";

// Update this if you add a property to the Freet type!
type CommentResponse = {
  _id: string;
  author: string;
  dateCreated: string;
  content: string;
  dateModified: string;
  parentId: Types.ObjectId;

};

/**
 * Encode a date as an unambiguous string
 *
 * @param {Date} date - A date object
 * @returns {string} - formatted date as string
 */
const formatDate = (date: Date): string => moment(date).format('MMMM Do YYYY, h:mm:ss a');

/**
 * Transform a raw Freet object from the database into an object
 * with all the information needed by the frontend
 *
 * @param {HydratedDocument<Comment>} freet - A freet
 * @returns {FreetResponse} - The freet object formatted for the frontend
 */
const constructCommentResponse = (comment: HydratedDocument<Comment>): CommentResponse => {
  const commentCopy: PopulatedComment = {
    ...comment.toObject({
      versionKey: false // Cosmetics; prevents returning of __v property
    })
  };
  const {username} = commentCopy.authorId;
  delete commentCopy.authorId;
  return {
    ...commentCopy,
    _id: commentCopy._id.toString(),
    author: username,
    dateCreated: formatDate(comment.dateCreated),
    dateModified: formatDate(comment.dateModified)
  };
};

export {
  constructCommentResponse
};
